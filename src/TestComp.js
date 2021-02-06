import "./TestComp.css";

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
      <input type="checkbox" id="Gluten" name="Gluten" value="Gluten"></input>
      <label for="Gluten">Gluten Free</label>
      <input type="checkbox" id="Vegan" name="Vegan" value="Vegan"></input>
      <label for="Vegan"> Vegan</label>
    </form>
    </div>
  );
}

export default TestComp;
