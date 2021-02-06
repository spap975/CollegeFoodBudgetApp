import "./TestComp.css";
import React, { useRef, useEffect, useState, Componenet } from "react";

function TestComp() {

  const inputRef = useRef("");

  const handleSubmit = () => {
    
  }

  return (
    
    <div class="d-inline-flex p-2">
      
    <form>
      <h1> Budgeting App </h1>
    <div className="form-group">
            <label>Budget Per Week</label>
            <input name="email" type="email" className="form-control" placeholder="$" ref={inputRef} />
       </div>
        <div className="form-check" >
            <label>Dietary Restrictions</label>
            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="Vegetarian"> Vegetarian
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="Vegan"> Vegan
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="GlutenFree"> Gluten Free
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="DairyFree"> Dairy Free
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="PeanutAllergy"> Peanut Allergy
            </label>
        </div>

        <br></br>
        <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Submit</button>

    </form>
    </div>
    
  );
}

export default TestComp;
