import "./InputPage.css";
import React, { useRef, useEffect, useState, Componenet } from "react";
import axios from "axios";
import DomParser from "dom-parser";

function InputPage() {

  const inputRef = useRef("");
  const vegetarian = useRef();
  const vegan = useRef();
  const gluten = useRef();
  const dairy = useRef();
  const peanut = useRef();

  const handleSubmit = (props) => {
  
    // var options = {
    //   method: 'GET',
    //   url: 'https://api.spoonacular.com/recipes/complexSearch',
    //   params: {
    //     apiKey: "68028abd508948df9ad533955628fc4f",
    //     diet: 'vegetarian',
    //     excludeIngredients: 'coconut',
    //     intolerances: 'egg, gluten',
    //     number: '10',
    //   },

    // };

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    const userData = {
      "budget" : inputRef.current.value,
      "vegetarian" : vegetarian.current.checked,
      "vegan" : vegan.current.checked,
      "gluten" : gluten.current.checked,
      "dairy" : dairy.current.checked,
      "peanut" : peanut.current.checked
    };

    window.location = `/Breakdown?budget=${inputRef.current.value}&vege=${vegetarian.current.checked}&v=${vegan.current.checked}&g=${gluten.current.checked}&d=${dairy.current.checked}&p=${peanut.current.checked}`;

  }

  return (

    <div className="background">

    <div class="d-inline-flex p-2" className="InputContainer" style={{ backgroundImage: "url(/leafBackground.jpeg)" }}>

    <form>
      <h1 className="important"> $crunch </h1>
    <div className="form">
            <label className="Budget">Budget Per Week</label>
            <input name="number" type="number" className="form-control" placeholder="$" ref={inputRef} />
       </div>
        <div className="form">
            <label>Dietary Restrictions</label>
            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={vegetarian}></input>
            <label class="form-check-label" for="Vegetarian"> Vegetarian
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={vegan}></input>
            <label class="form-check-label" for="Vegan"> Vegan
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={gluten}></input>
            <label class="form-check-label" for="GlutenFree"> Gluten Free
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={dairy}></input>
            <label class="form-check-label" for="DairyFree"> Dairy Free
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" ref={peanut}></input>
            <label class="form-check-label" for="PeanutAllergy"> Peanut Allergy
            </label>
        </div>

        <br></br>
        <button class="btn btn-primary" type="button" onClick={handleSubmit}>Submit</button>

    </form>
    </div>
    </div>
  );
}

export default InputPage;
