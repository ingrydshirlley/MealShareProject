import React from "react";
import "./SecondSection.css";

function SecondSection() {
  return (
    <div className="container-second">

      <div className="register-container">
        <div className="cadastro">
          <h1>Cadastro</h1>
        </div>

        <div className="linhaCadastro"></div>
      </div>



      <div className="form">

        <div className="tipoPessoa">
          <div>
            <h1>Você é</h1>
          </div>
          <div className="dropdown">
            <div className="input-wrapper">
              <select className="inputCustom" name="tipoRestaurante" id="tipoRestaurante">
                <option value="" disabled selected>Selecione uma opção</option>
                <option value="doador">Doador</option>
                <option value="doador">Restaurante Parceiro</option>
                <option value="ajuda">QSolicitante</option>
              </select>
            </div>
          </div>
        </div>

        <div className="firstLine">

          <div className="campo">
            <div>
              <h1>Nome</h1>
            </div>
            <div>
              <input type="text" name="nome" id="nome" className="inputName" />
            </div>
          </div>

          <div className="campo">
            <div>
              <h1>Seu telefone</h1>
            </div>
            <div>
              <input type="number" name="telefone" id="telefone" className="inputCustom inputFone " />
            </div>
          </div>

          <div className="campo">
            <div>
              <h1>Tipo de Pessoa</h1>
            </div>
            <div>
              <input type="text" name="tipoPessoa" id="tipoPessoa" className="inputCustom inputPessoa" />
            </div>
          </div>
        </div>

        <div className="secondLine">

          <div className="campo">
            <div>
              <h1>Data de Nascimento</h1>
            </div>
            <div>
              <input type="date" name="telefone" id="dataNascimento" className="inputCustom inputDate" />
            </div>
          </div>

          <div className="campo">
            <div>
              <h1>CPF/CNPJ</h1>
            </div>
            <div>
              <input type="number" name="cpf/cnpj" id="cpf/cnpj" className="inputCustom inputCPF" />
            </div>
          </div>

          <div className="campo">
            <div>
              <h1>CEP</h1>
            </div>
            <div>
              <input type="number" name="cep" id="cep" className="inputCustom inputCep" />
            </div>
          </div>

          <div className="campo">
            <div>
              <h1>Endereço</h1>
            </div>
            <div>
              <input type="text" name="endereco" id="endereco" className="inputCustom inputAdress" />
            </div>
          </div>

        </div>

        <div className="thirdLine">
          <div className="campo">
            <div>
              <h1>Email</h1>
            </div>
            <div>
              <input type="email" name="email" id="email" className="inputCustom inputEmail" />
            </div>
          </div>

          <div className="campo">
            <div>
              <h1>Confirmar email</h1>
            </div>
            <div>
              <input type="email" name="email" id="email" className="inputCustom inputEmailAgain" />
            </div>
          </div>
        </div>

        <div className="fourthLine">
          <div className="campo">
            <div>
              <h1>Senha</h1>
            </div>
            <div>
              <input type="password" name="senha" id="senha" className="inputCustom inputPassword" />
            </div>
          </div>

          <div className="campo">
            <div>
              <h1>Confirmar Senha</h1>
            </div>
            <div>
              <input type="password" name="confirmarSenha" id="confirmarSenha" className="inputCustom inputPassword" />
            </div>
          </div>
        </div>

      </div>

      <div className="checkbox">
        <div>
          <input type="checkbox" name="termos" id="termos" />
        </div>
        <h1>Concordo com a coleta e uso interno dos dados enviados neste formulário, não sendo fornecidos para terceiros.</h1>
      </div>

      <button className="cadastrar">Cadastrar</button>

    </div>
  );
}

export default SecondSection;