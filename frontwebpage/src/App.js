import './App.css';

import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Button
} from 'reactstrap';

import Plot from 'react-plotly.js';

function App() {
  return (
    <div>
      <Navbar color="dark" light expand="md" className="spaceLeft">
        <NavbarBrand href="/" className="text-white">Mingdao iGEM Bacterial Phage Simulation Visualizer</NavbarBrand>
        <NavbarText className="floatRight text-white">Mingdao iGEM 2021</NavbarText>
      </Navbar>
      <br></br><Button color="secondary" className="marginLeft">Start Simulation</Button><br></br><br></br>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={ {autosize: true, title: 'Bacteria Population Size'} }
      />
    </div>
  );
}

export default App;
