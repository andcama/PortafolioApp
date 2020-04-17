import React, { Component } from 'react';

class Vitae extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.resumendehabilidades;
      var education = this.props.data.educacion.map(function(educacion){
        return <div key={educacion.universidad}><h3>{educacion.universidad}</h3>
        <p className="info">{educacion.grado} <span>&bull;</span><em className="date">{educacion.graduado}</em></p>
        <p>{educacion.descripcion}</p></div>
      })
      var work = this.props.data.trabajo.map(function(trabajo){
        return <div key={trabajo.compañia}><h3>{trabajo.compañia}</h3>
            <p className="info">{trabajo.titulo}<span>&bull;</span> <em className="date">{trabajo.años}</em></p>
            <p>{trabajo.descripcion}</p>
        </div>
      })
      var skills = this.props.data.habilidades.map(function(habilidades){
        var className = 'bar-expand '+habilidades.nombre.toLowerCase();
        return <li key={habilidades.nombre}><span style={{width:habilidades.nivel}}className={className}></span><em>{habilidades.nombre}</em></li>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Educacion</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Trabajo</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Habilidades</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Vitae;
