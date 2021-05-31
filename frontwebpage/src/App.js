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
      iter1: null,
      bacPop: null,
      phagePop: null
    };
  }

  async componentDidMount() {
    try {
      fetch("http://127.0.0.1:8000/data/initialize", {
      credentials: 'include',
      method: 'GET',
      mode: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
    }).then(res => res.json())
      .then(
        (result) => {
          this.setState({

          });
        });
    }
    catch(e){
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
        <br></br><Button color="secondary" className="marginLeft">Start Simulation</Button><br></br><br></br>
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
        <p>/*should be added later */</p>
      </div>
    );
  }
}

export default App;