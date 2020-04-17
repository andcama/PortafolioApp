import React, { Component } from "react";

class Testimonio extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonios.map(function (
        testimonios
      ) {
        return (
          <li key={testimonios.usuario}>
            <blockquote>
              <p>{testimonios.texto}</p>
              <cite>{testimonios.usuario}</cite>
            </blockquote>
          </li>
        );
      });
    }
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Frase Celebre</span>
              </h1>
            </div>
            <div className="ten columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonio;
