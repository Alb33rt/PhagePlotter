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
      iter: Array[70],
      bacPop:  Array[70],
      phagePop:  Array[70]
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
            var barPropArr=Array[70];
            var phagePropArr=Array[70];
            var iterationArr=Array[70];
            for(let i=0;i<result.length;i++){
              barPropArr.push(result[i].bacteria_population);
              phagePropArr.push(result[i].phage_population);
              iterationArr.push(i);
            }
            this.setState({
              bacPop: barPropArr,
              phagePop: phagePropArr,
              iter: iterationArr
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
          var barPropArr=Array[70];
          var phagePropArr=Array[70];
          var iterationArr=Array[70];
          for(let i=0;i<result.length;i++){
            barPropArr.push(result[i].bacteria_population);
            phagePropArr.push(result[i].phage_population);
            iterationArr.push(i);
          }
          this.setState({
            bacPop: barPropArr,
            phagePop: phagePropArr,
            iter: iterationArr
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
              x: this.state.iter,
              y: this.state.bacPop,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
          ]}
          layout={{ autosize: true, title: 'Bacteria Population Size' }}
        />
        <Plot
          data={[
            {
              x: this.state.iter,
              y: this.state.phagePop,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
          ]}
          layout={{ autosize: true, title: 'Phage Population Size' }}
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