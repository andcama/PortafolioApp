import React, { Component } from "react";
import {
      Redirect
} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


class Header extends Component {
  render() {
    if (this.props.data) {
      var nombre = this.props.data.nombre;
      var ocupacion = this.props.data.ocupacion;
      var descripcion = this.props.data.descripcion;
      var ciudad = this.props.data.direccion.ciudad;
      var redes = this.props.data.redes.map(function (redes) {
        return (
          <li key={redes.nombre}>
            <a href={redes.url}>
              <i className={redes.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      
      <div>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav" >
            <li>
              <Link to="/"  >
                Inicio
              </Link>
            </li>
            <li>
              <Link smooth to="/acerca#about">
                Acerca
              </Link>
            </li>
            <li>
              <Link  smooth to="/vitae#resume"  >
                Vitae
              </Link>
            </li>
            <li>
              <Link  smooth to="/proyectos#portfolio"  >
                Proyectos
              </Link>
            </li>
            <li>
              <Link  smooth to="/frases#testimonials"  >
                Frases
              </Link>
            </li>
            <li>
              <Link  smooth to="/contacto#contact"  >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

         <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Mi nombre es {nombre}.</h1>
            <h3>
              Soy de {ciudad} trabajo como <span>{ocupacion}</span>.{" "}
              {descripcion}.
            </h3>
            <hr />
            <ul className="social">{redes}</ul>
          </div>
        </div> 

        <p className="scrolldown">
          <a className="smoothscroll" href="#footer">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>       
      </div>     
    
    );
  }
}

export default Header;
