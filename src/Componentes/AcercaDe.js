import React, { Component } from 'react';

class AcercaDe extends Component {
  render() {

    if(this.props.data){
      var nombre = this.props.data.nombre;
      var fotoperfil= "imagenes/"+this.props.data.imagen;
      var biografia = this.props.data.biografia;
      var calle = this.props.data.direccion.calle;
      var ciudad = this.props.data.direccion.ciudad;
      var provincia = this.props.data.direccion.provincia;
      var codigozip = this.props.data.direccion.codigozip;
      var telefono= this.props.data.telefono;
      var correo = this.props.data.correo;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={fotoperfil} alt="Foto de perfil" />
         </div>
         <div className="nine columns main-col">
            <h2>Acerca</h2>

            <p>{biografia}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="direccion">
						   <span>{nombre}</span><br />
						   <span>{calle}<br />
						         {ciudad} {provincia}, {codigozip}
                   </span><br />
						   <span>{telefono}</span><br />
                     <span>{correo}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Descargar CV</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default AcercaDe;
