import React, { Component } from 'react';
import { getSelectItems } from '../../api';
import Select from '../commons/select';
import Text from '../commons/text';
import RadioGroup from '../commons/radio-group';

class GeruForm extends Component {
  state = {
    orgao_emissor: [],
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
  }

  validateForm = (form) => {
    const { rg, data_emissao, orgao_expedidor, sexo } = form;
    let errorForm = { ...this.state.errorForm };

    const datePattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

    if (rg) {
      errorForm.rg = rg.replace(/ /g, '').length > 5 ? false : true;
    }else{
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

    this.setState({ errorForm });

  }

  onSubmit = () => {
    this.validateForm(this.state.form);
  }

  render() {
    const { orgao_emissor, errorForm } = this.state;
    return (
      <div className="form-item">
        <Text
          mask="11 111 111 11"
          name="rg"
          label="Número do RG"
          value={this.state.rg}
          changeValue={this.updateFormValues}
          value={this.state.form.rg}
          error={errorForm.rg}/>
        <Text
          mask="11/11/1111"
          name="data_emissao"
          label="Data de Emissão"
          value={this.state.data_emissao}
          changeValue={this.updateFormValues}
          value={this.state.form.data_emissao}
          error={errorForm.data_emissao}/>
        <Select
          name="orgao_expedidor"
          label="Orgão Expedidor"
          items={orgao_emissor}
          value={this.state.orgao_expedidor}
          changeValue={this.updateFormValues}
          value={this.state.form.data_emissao}
          error={errorForm.orgao_expedidor}/>
        <RadioGroup
          name="sexo"
          label="sexo"
          changeValue={this.updateFormValues}
          value={this.state.form.sexo}/>
        <button disabled={!this.state.canSubmit} onClick={this.onSubmit}>Continuar</button>
      </div>
    );
  }
}

export default GeruForm;
