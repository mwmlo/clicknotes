import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Mechanics from './notes/physics/mechanics/Mechanics';


// Argon Design
import "../node_modules/argon-design-system-react/src/assets/vendor/nucleo/css/nucleo.css";
import "../node_modules/argon-design-system-react/src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../node_modules/argon-design-system-react/src/assets/css/argon-design-system-react.css";
import "../node_modules/argon-design-system-react/src/assets/vendor/font-awesome/css/font-awesome.min.css";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/mechanics">
            <Mechanics />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
