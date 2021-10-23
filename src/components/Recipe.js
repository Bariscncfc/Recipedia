import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <div className={style.intro}>
        <h1 className={style.title}>{title}</h1>
        <img src={image} className={style.image} alt="" />
        <p className={style.calorie}>
          Calorie:
          <br />
          {calories.toFixed(4)}
        </p>
      </div>
      <div className={style.ingredient}>
        <ul style={{ listStyleType: "none" }}>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;
