import "./TestComp.css";
import React, { Componenet } from "react";

function TestComp() {
  return (
    <div>
    <p className="title">BUDGET APP</p>
    <form>
      <p className= "Budget-title">Budget (per week)</p>
      <input type="text" id="budget" name="fname"></input>
      <p className= "DietaryRestrictions">Dietary Restrictions</p>
      <input type="checkbox" id="Vegetarian" name="Vegetarian" value="Vegetarian"></input>
      <label for="Vegetarian"> Vegetarian</label>
      <input type="checkbox" id="GlutenFree" name="GlutenFree" value="GlutenFree"></input>
      <label for="Gluten">Gluten Free</label>
      <input type="checkbox" id="Vegan" name="Vegan" value="Vegan"></input>
      <label for="Vegan"> Vegan</label>
      <input type="checkbox" id="DairyFree" name="DairyFree" value="DairyFree"></input>
      <label for="Vegetarian"> DairyFree</label>
      <input type="checkbox" id="Kosher" name="Kosher" value="Kosher"></input>
      <label for="Kosher"> Kosher</label>
      <input type="checkbox" id="PeanutAllergy" name="PeanutAllergy" value="PeanutAllergy"></input>
      <label for="PeanutAllergy"> Peanut Allergy</label>

      <input type="submit" value="Submit">

    </form>
    </div>
  );
}

export default TestComp;
