import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import AcercaDe from './Componentes/AcercaDe';
import Vitae from './Componentes/Vitae';
import Contacto from './Componentes/Contacto';
import Testimonio from './Componentes/Testimonio';
import Portafolio from './Componentes/Portafolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      Datos: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  obtenerDatos(){
    $.ajax({
      url:'/Datos.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({Datos: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.obtenerDatos();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.Datos.principal}/>
        <AcercaDe data={this.state.Datos.principal}/>
        <Vitae data={this.state.Datos.curriculum}/>
        <Portafolio data={this.state.Datos.portafolio}/>
        <Testimonio data={this.state.Datos.testimonios}/>
        <Contacto data={this.state.Datos.principal}/>
        <Footer data={this.state.Datos.principal}/>
      </div>
    );
  }
}

export default App;
