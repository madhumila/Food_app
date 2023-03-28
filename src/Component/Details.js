import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
const {id} = useParams();
console.log(id);
const [details, setDetails] = useState();
  useEffect(() => {
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
    .then(function (response) {
        console.log(response.data.meals);
      setDetails(response.data.meals);  
    });
}, [id]);
    
  return (
    <div>
      {id}
      {details && (
        <div>
          <p>{details.strInstructions}</p>
         
        </div>
      )}
    </div>
  );
};

export default Details;
