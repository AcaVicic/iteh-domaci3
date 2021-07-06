import "./App.scss";
import Pocetna from "./components/Pocetna";
import Gradovi from "./components/Gradovi";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path="/gradovi" component={Gradovi}/>
      <Route path="/" exact component={Pocetna}/>
    </Router>
  );
}

export default App;
