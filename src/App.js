import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Landing from './components/Landing';

// Argon Design
import "../node_modules/argon-design-system-react/src/assets/vendor/nucleo/css/nucleo.css";
import "../node_modules/argon-design-system-react/src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../node_modules/argon-design-system-react/src/assets/css/argon-design-system-react.css";
import "../node_modules/argon-design-system-react/src/assets/vendor/font-awesome/css/font-awesome.min.css";

// Note components
import Mechanics from './notes/physics/mechanics/Mechanics';
import Thermal from './notes/physics/thermal/Thermal';
import WavesSL from './notes/physics/waves_sl/WavesSL';
import ElectromagnetismSL from './notes/physics/electro_sl/ElectromagnetismSL';
import CircMotion from './notes/physics/circmotion/CircMotion';
import NuclearSL from './notes/physics/nuclear_sl/NuclearSL';
import Energy from './notes/physics/energy/Energy';
import Fields from './notes/physics/fields/Fields';
import ElectroHL from './notes/physics/electro_hl/ElectroHL';
import NuclearHL from './notes/physics/nuclear_hl/NuclearHL';

import Atomic from './notes/chemistry/atomic/Atomic'
import Periodicity from './notes/chemistry/periodic/Periodicity';
import Bonding from './notes/chemistry/bonding/Bonding';
import Energetics from './notes/chemistry/energetics/Energetics';
import Kinetics from './notes/chemistry/kinetics/Kinetics';
import Equilibrium from './notes/chemistry/equilibrium/Equilibrium';

function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <Route exact path="/">
            <Landing />
          </Route>

          {/*Physics*/}
          <Route path="/mechanics">
            <Mechanics />
          </Route>
          <Route path="/thermal">
            <Thermal />
          </Route>
          <Route path="/wavesSL">
            <WavesSL />
          </Route>
          <Route path="/electroSL">
            <ElectromagnetismSL />
          </Route>
          <Route path="/circmotion">
            <CircMotion />
          </Route>
          <Route path="/nuclearSL">
            <NuclearSL />
          </Route>
          <Route path="/energy">
            <Energy />
          </Route>
          <Route path="/fields">
            <Fields />
          </Route>
          <Route path="/electroHL">
            <ElectroHL />
          </Route>
          <Route path="/nuclearHL">
            <NuclearHL />
          </Route>

          {/*Chemistry*/}
          <Route path="/atomic">
            <Atomic />
          </Route>
          <Route path="/periodicity">
            <Periodicity />
          </Route>
          <Route path="/bonding">
            <Bonding />
          </Route>
          <Route path="/energetics">
            <Energetics />
          </Route>
          <Route path="/kinetics">
            <Kinetics />
          </Route>
          <Route path="/equilibrium">
            <Equilibrium />
          </Route>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
