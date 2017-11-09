import React, { Component } from 'react';
import { getSelectItems } from '../../api';
import Select from '../commons/select';
import Text from '../commons/text';
import RadioGroup from '../commons/radio-group';

class GeruForm extends Component {
  state = {
    orgao_emissor: []
  }

  componentWillMount() {
    getSelectItems().then(response => {
      const {orgao_emissor} = response.data;
      if(orgao_emissor) {
        this.setState({orgao_emissor});
      }
    })
    .catch(function (error) {
      console.log(error);
    });;

  }
  render() {
    const {orgao_emissor} = this.state;
    return (
      <div>
        Geru Form
        <Text name="rg" label="Número do RG"/>
        <Text name="data_emissao" label="Data de Emissão"/>
        <Select name="orgao_expedidor" label="Orgão Expedidor" items={orgao_emissor}/>
        <RadioGroup />
      </div>
    );
  }
}

export default GeruForm;
