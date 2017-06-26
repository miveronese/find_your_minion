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

      add: async(data) => {
        const response = await Api.post('/contacts', data);
        const status = await response.status;

        if (status === 201) {
          this.fetchAll();
        }
      },

      find: action(minionId => {
        return (
          this.all.slice().filter(
            c => c.id === parseInt(minionId, 10)
          )[0]
        );
      }),

      remove: action(minionId => {
        const existing = this.all;
        this.all = existing.filter(
          c => c.id != minionId
        );
      })
          
    })
  }
}

export default new Minions();
