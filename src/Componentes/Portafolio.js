import React, { Component } from 'react';

class Portafolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.proyectos.map(function(proyectos){
        var projectImage = 'imagenes/portfolio/'+proyectos.imagen;
        return <div key={proyectos.titulo} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={proyectos.url} title={proyectos.titulo}>
               <img alt={proyectos.titulo} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{proyectos.titulo}</h5>
                     <p>{proyectos.categoria}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portafolio;
