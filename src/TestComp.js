import "./TestComp.css";

function TestComp() {
  return (
    <div>
    <p className="title">BUDGET APP</p>
    <form>
      <label for="FORM-BUDGET">Budget (per week)</label>
      <input type="text" id="budget" name="fname"></input>
    </form>
    </div>
  );
}

export default TestComp;
