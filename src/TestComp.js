import "./TestComp.css";
import React, { useRef, useEffect, useState, Componenet } from "react";

function TestComp() {

  const inputRef = useRef("");

  useEffect(() => {
    console.log(inputRef);
  },[inputRef]);

  return (
    <div class="d-inline-flex p-2">
    <form>
    <div className="form-group">
            <label>Budget Per Week</label>
            <input name="email" type="email" className="form-control" placeholder="$" ref={inputRef} />
       </div>

        <div className="form-check" >
            <label>Dietary Restrictions</label>
            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault"> Vegetarian
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault"> Vegan
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault"> Gluten Free
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault"> Dairy Free
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault"> Kosher
            </label>

            <br></br>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
            <label class="form-check-label" for="flexCheckDefault"> Peanut Allergy
            </label>
        </div>

        <br></br>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>

    </form>
    </div>
    
  );
}

export default TestComp;
