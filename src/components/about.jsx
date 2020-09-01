import React, { Component } from 'react'

export class about extends Component {
  render () {
    return (
<div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/logo_png_v2.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Sobre Nós</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>Nossa Missão</h3>
                <p>{this.props.data ? this.props.data.missao : 'loading...'}</p>
                <h3>Nossa Visão</h3>
                <p>{this.props.data ? this.props.data.visao : 'loading...'}</p>
                <h3>Valores</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.valores.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
