import './App.css';
import React, { Component } from 'react';
import $ from 'jquery';
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Button
} from 'reactstrap';
import Plot from 'react-plotly.js';

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = $.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
var csrftoken = getCookie('csrftoken');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iter: null,
      bacPop: null,
      phagePop: null
    };
  }

  async componentDidMount() {
    try {
      fetch("http://localhost:8000/data/simdata1", {
        credentials: 'include',
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
      }).then(res => res.json())
        .then(
          (result) => {
            this.setState({
              bacPop: result[0].bacteria_population,
              phagePop: result[0].phage_population,
            });
          });
    }
    catch (e) {
      console.log(e);
    }
  }
  sendRequest() {
    try {
      fetch("http://localhost:8000/data/simdata1", {
        credentials: 'include',
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
      }).then(res => res.json())
        .then(
          (result) => {
            this.setState({
              bacPop: result.bacteria_population,
              phagePop: result.phage_population,
            });
          });
    }
    catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md" className="spaceLeft">
          <NavbarBrand href="/" className="text-white">Mingdao iGEM Bacterial Phage Simulation Visualizer</NavbarBrand>
          <NavbarText className="floatRight text-white">Mingdao iGEM 2021</NavbarText>
        </Navbar>
        <br></br><Button color="secondary" className="marginLeft" onClick={this.sendRequest.bind(this)}>Start Simulation</Button><br></br><br></br>
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
          ]}
          layout={{ autosize: true, title: 'Bacteria Population Size' }}
        />
        <p>Bacteria Population</p>
        <p>{this.state.bacPop}</p>
        <p>Phage Population</p>
        <p>{this.state.phagePop}</p>
      </div>
    );
  }
}

export default App;