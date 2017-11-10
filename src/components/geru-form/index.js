import React, { Component } from 'react';
import { getSelectItems, sendForm } from '../../api';
import Select from '../commons/select';
import Text from '../commons/text';
import RadioGroup from '../commons/radio-group';

function existsValue(obj, value) {
  return Object.keys(obj).some(function (k) {
    return obj[k] === value;
  });
}

class GeruForm extends Component {
  state = {
    orgao_emissor: [],
    formValidated: false,
    canSubmit: true,
    form: {
      rg: '',
      data_emissao: '',
      orgao_expedidor: '',
      sexo: ''
    },
    errorForm: {
      rg: false,
      data_emissao: false,
      orgao_expedidor: false,
      sexo: false
    }
  }

  componentWillMount() {
    getSelectItems().then(response => {
      const { orgao_emissor } = response.data;
      if (orgao_emissor) {
        this.setState({ orgao_emissor });
      }
    })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateFormValues = (name, value) => {
    let form = { ...this.state.form };
    form[name] = value;
    this.setState({ ...this.state, form });
    if (!this.state.canSubmit) {
      this.validateForm(form);
    }
  }

  validateForm = (form) => {

    const datePattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    const { rg, data_emissao, orgao_expedidor, sexo } = form;
    let errorForm = { ...this.state.errorForm };

    if (rg) {
      errorForm.rg = rg.replace(/ /g, '').length > 5 ? false : true;
    } else {
      errorForm.rg = true;
    }

    if (data_emissao && data_emissao.length > 0) {
      errorForm.data_emissao = !datePattern.test(data_emissao);
    } else {
      errorForm.data_emissao = true;
    }

    if (orgao_expedidor.length > 0) {
      errorForm.orgao_expedidor = false;
    } else {
      errorForm.orgao_expedidor = true;
    }

    let exists = existsValue(errorForm, true);
    this.setState({ errorForm, canSubmit: exists ? false : true, formValidated: !exists});
    return exists ? false : true;
  }

  onSubmit = () => {
    const valitaded = this.validateForm(this.state.form);
    if (valitaded) {
      sendForm(this.state.form).then(response => {
        console.log(response);
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  render() {
    const { orgao_emissor, errorForm } = this.state;
    return (
      <div className="form-item">
        <h1>Dados Pessoais</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="box box-container">
              <Text
                mask="11 111 111 11"
                name="rg"
                label="Número do RG"
                value={this.state.rg}
                changeValue={this.updateFormValues}
                value={this.state.form.rg}
                error={errorForm.rg} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="box box-container">
              <Text
                mask="11/11/1111"
                name="data_emissao"
                label="Data de Emissão"
                value={this.state.data_emissao}
                changeValue={this.updateFormValues}
                value={this.state.form.data_emissao}
                error={errorForm.data_emissao} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="box box-container">
              <Select
                name="orgao_expedidor"
                label="Orgão Expedidor"
                items={orgao_emissor}
                value={this.state.orgao_expedidor}
                changeValue={this.updateFormValues}
                value={this.state.form.data_emissao}
                error={errorForm.orgao_expedidor} />
            </div>
          </div>
        </div>

        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="box box-container">
              <RadioGroup
                name="sexo"
                label="sexo"
                changeValue={this.updateFormValues}
                value={this.state.form.sexo} />
            </div>
          </div>
        </div>

        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="box box-container">
              <button disabled={!this.state.canSubmit} onClick={this.onSubmit}>Continuar</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default GeruForm;
