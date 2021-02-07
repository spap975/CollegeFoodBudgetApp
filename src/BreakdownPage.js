import "./BreakdownPage.css";
import React, { useRef, useEffect, useState, Componenet } from "react";
import axios from "axios";
import DomParser from "dom-parser";

function BreakdownPage() {

  const inputRef = useRef("");
  const [ingredients, setIngredients] = useState([""]);

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    useEffect(() => {
        var parser = new DomParser();


        axios.get("https://spoonacular.com/Sun-dried-Tomato--amp--Artichoke-Tuna-Casserole-662287")
      .then((res) => {
        var dom = parser.parseFromString(res.data);

        var ingr = dom.getElementsByClassName('spoonacular-ingredient');

        var newIngr = [];

        ingr.forEach((i) => newIngr = [...newIngr, i.childNodes[3].childNodes[0].text]);

        setIngredients(newIngr);

      });
    },[])

  const handleSubmit = () => {
    
  }

  return (
    <div className="Title" style={{ background: '#e1f5ba'}}>
      <div className="Title" style={{ background: '#e1f5ba', width: '100%',textAlign: 'center'}}>
      <h1> $crunch's Weekly list and recipes for you! Enjoy:</h1>
      </div>
      <div className="row">
        <div className="column" style={{ background: '#e1f5ba', width: '50%',textAlign: 'center'}}>
            <h2>Grocery List</h2>
            {
                ingredients.map((ing, i) => {
                    return (
                        <p key={i}>{ing}</p>
                    );
                })
            }
        </div>
        <div className="column" style={{ background: '#f1fae1', width: '50%',textAlign: 'center'}}>
            <h2>Weekly Recipes</h2>
            <p>Data..</p>
        </div>
    </div>
    </div>
    
  );
}

export default BreakdownPage;
