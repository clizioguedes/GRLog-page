import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="section-title">
              <h2>Nossos endereços</h2>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
              <h3>Rio Grande do Norte</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Endereço
                  </span>
                  {this.props.data ? this.props.data.RN.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefone
                  </span>{" "}
                  {this.props.data ? this.props.data.RN.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.RN.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
              <h3>Paraíba</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Endereço
                  </span>
                  {this.props.data ? this.props.data.PB.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefone
                  </span>{" "}
                  {this.props.data ? this.props.data.PB.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.PB.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
              <h3>Pernambuco</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Endereço
                  </span>
                  {this.props.data ? this.props.data.PE.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefone
                  </span>{" "}
                  {this.props.data ? this.props.data.PE.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.PE.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "/"} target='blank'>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              Desenvolvimento: &copy;2020 CGWeb Solutions {" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
