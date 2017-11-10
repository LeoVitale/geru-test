import axios from 'axios';

export const getSelectItems = function getSelectItems(){
  return axios.request('http://localhost:5000/select');
}

export const sendForm = function sendForm(data){
  return axios.post('http://localhost:5000/form', data);
}
