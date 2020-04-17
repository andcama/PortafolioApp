import React, { Component } from "react";

class Contacto extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.nombre;
      var street = this.props.data.direccion.calle;
      var city = this.props.data.direccion.ciudad;
      var state = this.props.data.direccion.provincia;
      var zip = this.props.data.direccion.codigozip;
      var phone = this.props.data.telefono;
      var email = this.props.data.correo;
      var message = this.props.data.mensajecontacto;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Estamos en Contacto</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form
              action=""
              method="post"
              id="formulariocontacto"
              name="formulariocontacto"
            >
              <fieldset>
                <div>
                  <label htmlFor="nombrecontacto">
                    Nombre <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="nombrecontacto"
                    name="nombrecontacto"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="correocontacto">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="correocontacto"
                    name="correocontacto"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="asuntocontacto">Asunto</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="asuntocontacto"
                    name="asuntocontacto"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="mensajecontacto">
                    Mensaje <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="mensajecontacto"
                    name="mensajecontacto"
                  ></textarea>
                </div>

                <div>
                  <button className="submit">Enviar</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning">Error!!</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Su mensaje ha sido enviado,Gracias!!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Direccion y Telefono</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
              </p>
            </div>         
          </aside>
        </div>
      </section>
    );
  }
}

export default Contacto;
