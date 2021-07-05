import "./App.scss";
import Navbar from "./components/Navbar";
import Pocetna from "./components/Pocetna";
import Gradovi from "./components/Gradovi";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/gradovi" component={Gradovi}/>
      <Route path="/" exact component={Pocetna}/>
    </Router>
  );
}

export default App;
