import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Landing from './components/Landing';

// Note components
import Mechanics from './notes/physics/mechanics/Mechanics';
import Thermal from './notes/physics/thermal/Thermal';
import WavesSL from './notes/physics/waves_sl/WavesSL';

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
            <Landing />
          </Route>
          <Route path="/mechanics">
            <Mechanics />
          </Route>
          <Route path="/thermal">
            <Thermal />
          </Route>
          <Route path="/wavesSL">
            <WavesSL />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
