import InputPage from "./InputPage.js";
import BreakdownPage from "./BreakdownPage.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={InputPage} exact={true} />
        <Route path="/Breakdown" component={BreakdownPage}/>
      </Switch>
    </Router>
  );
}

export default App;

