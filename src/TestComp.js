import "./TestComp.css";
import React, { Componenet } from "react";

function TestComp() {
  return (
    <div>
    <p className="title">BUDGET APP</p>
    <form>
      <p className= "Budget-title">Budget (per week)</p>
      <input type="text" id="budget" name="fname"></input>
    </form>
    </div>
  );
}

export default TestComp;
