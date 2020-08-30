import React, { useState } from "react";

import api from '../services/api';

export default function Orcamento() {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [produto, setProduto] = useState('');
  const [peso, setPeso] = useState();
  const [valor, setValor] = useState();
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [observacao, setObservacao] = useState('');

  async function handleOrcamento(e) {
    e.preventDefault();

    const data = {
      nome,
      email,
      celular,
      produto,
      peso,
      valor,
      origem,
      destino,
      observacao
    }

    try {
      await api.post('orcamentos', data)

      window.location.reload(true);

      alert('Orçamento Enviado com Sucesso, iremos te responder o mais rápido possivel')
    } catch (error) {
      alert('Erro no Cadastro')
    }

  }
  return (
    <div>
      <div id="orcamento">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">

                <h2>ORÇAMENTO</h2>
                <p>
                  PREENCHA TODOS OS CAMPOS e Te responderemos por E-mail com todas as informações do orçamento
                  </p>
              </div>
              <form onSubmit={handleOrcamento}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Nome Completo"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="text"
                        className="form-control"
                        placeholder="Celular"
                        value={celular}
                        onChange={e => setCelular(e.target.value)}
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        id="produto"
                        className="form-control"
                        placeholder="Produto"
                        value={produto}
                        onChange={e => setProduto(e.target.value)}
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        id="peso"
                        className="form-control"
                        placeholder="Peso em KG"
                        value={peso}
                        onChange={e => setPeso(e.target.value)}
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="number"
                        id="valor"
                        className="form-control"
                        placeholder="Valor"
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="origem"
                        className="form-control"
                        placeholder="Origem Ex: Natal/RN"
                        value={origem}
                        onChange={e => setOrigem(e.target.value)}
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="destino"
                        className="form-control"
                        placeholder="Destino Ex: João Pessoa"
                        value={destino}
                        onChange={e => setDestino(e.target.value)}
                        required="required"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Observações"
                    value={observacao}
                    onChange={e => setObservacao(e.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}