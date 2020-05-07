import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import AcercaDe from "./Componentes/AcercaDe";
import Vitae from "./Componentes/Vitae";
import Contacto from "./Componentes/Contacto";
import Testimonio from "./Componentes/Testimonio";
import Portafolio from "./Componentes/Portafolio";
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      Datos: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  obtenerDatos() {
    $.ajax({
      url: "/Datos.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ Datos: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.obtenerDatos();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header data={this.state.Datos.principal} />
          <Switch>
            <Route exact path="/">
            </Route>
            <Route exact path="/acerca">
              <AcercaDe exact data={this.state.Datos.principal}/>
            </Route>
            <Route exact path="/vitae">
              <Vitae data={this.state.Datos.curriculum}/>
            </Route>
            <Route exact path="/proyectos">
              <Portafolio data={this.state.Datos.portafolio}/>
            </Route>
            <Route exact path="/frases">
              <Testimonio data={this.state.Datos.testimonios}/>
            </Route>
            <Route exact path="/contacto">
              <Contacto data={this.state.Datos.principal}/>
            </Route>
          </Switch>
          <Footer data={this.state.Datos.principal} />
        </div>
      </Router>
    );
  }
}

export default App;
