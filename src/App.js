import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Recipe from "./components/Recipe";
import Nav from "./components/Nav";

const App = () => {
  const APP_ID = "0cea5eca";
  const APP_KEY = "013e092557b20a5fe3f5661ec52dd4cc	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Nav />
      <div className="intro">
        <h1 style={{ textAlign: "center" }}>
          Explore the Foods <i class="fas fa-utensils"></i>
        </h1>
        <p style={{ textAlign: "center", fontSize: 18, fontStyle: "italic" }}>
          Learn Food Details and Recipes
        </p>

        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            placeholder="Search food name"
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.id}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
