import React, { useEffect, useState } from "react";
// import food from "./food.jpg"
import "./Main.css";
import axios from "axios";
import Details from "./Details";
import { Link } from "react-router-dom";

const Main = () => {
  const [recipes, setRecipes] = useState(null);
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
//   const handleClick = (idvalue) => {
//     setId(idvalue);
//   };
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
      .then(function (response) {
        setRecipes(response.data.meals);
      });
  }, [search]);
  const filteredData = recipes
    ? recipes.filter((item) =>
        item.strMeal.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <>
      <div style={{ textAlign: "center", color: "red" }}>
        <h1>Find meals for your ingredient</h1>
        <input
          type="text"
          placeholder="Enter an Ingredient"
          value={search}
          onChange={handleChange}
        />
      </div>
      <h1 style={{ textAlign: "center" }}>Your Search Results:</h1>

      <div className="main">
        {filteredData.map((recipe) => {
          return (
            <div className={`box ${recipe.id % 3 === 0 ? "first-in-row" : ""}`}>
              <img className="image" src={recipe.strMealThumb} alt="food" />
              <h2>{recipe.strMeal}</h2>
              <Link to={`/details/${recipe.idMeal}`}>
              <button 
            //   onClick={() => handleClick(recipe.idMeal)}
            >
                Get recipe
              </button>
              </Link>
            </div>
          );
        })}
        {/* {setId && <Details id={id} />} */}
      </div>
    </>
  );
};

export default Main;
