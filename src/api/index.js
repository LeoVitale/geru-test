import axios from 'axios';

export const getSelectItems = function getSelectItems(){
  return axios.request('http://localhost:5000/select');
}
