import { extendObservable, action, run } from 'mobx';
import Api from '../api';
import '../App.css';

class Minions {
  constructor(){
    extendObservable(this, {
      all : [],

      isLoading: false,

      fetchAll: async() => {
        this.isLoading = false;
        const response = await Api.get('/contacts');
        const status = await response.status;

        if (status === 200) {
          this.all = await response.json();
        }
      },

          
    })
  }
}

export default new Minions();
