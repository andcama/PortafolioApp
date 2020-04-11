import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var nombre = this.props.data.nombre;
      var ocupacion= this.props.data.ocupacion;
      var descripcion= this.props.data.descripcion;
      var ciudad= this.props.data.direccion.ciudad;
      var redes= this.props.data.redes.map(function(redes){
        return <li key={redes.nombre}><a href={redes.url}><i className={redes.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Inicio</a></li>
            <li><a className="smoothscroll" href="#about">Acerca</a></li>
	         <li><a className="smoothscroll" href="#resume">Vitae</a></li>
            <li><a className="smoothscroll" href="#portfolio">Proyectos</a></li>
            <li><a className="smoothscroll" href="#testimonials">Frases</a></li>
            <li><a className="smoothscroll" href="#contact">Contacto</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Mi nombre es {nombre}.</h1>
            <h3>Soy de {ciudad} trabajo como <span>{ocupacion}</span>. {descripcion}.</h3>
            <hr />
            <ul className="social">
               {redes}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
