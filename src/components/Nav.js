import React from "react";

const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 20,
        marginLeft: 20,
        justifyContent: "center",
      }}
    >
      <img src="../../images/logo.png" alt="logo" style={{ width: 80 }}></img>
      <h1>Recipedia</h1>
    </div>
  );
};

export default Nav;
