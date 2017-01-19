import UserActions from '../actions/UserActions';
import User from '../lib/services/users';
import Reflux from 'reflux';
import NavigationActions from '../actions/NavigationActions.js';

const UserStore = Reflux.createStore({
	listenables: [UserActions],
  init(){
    this.state = {
      users:[]
    }
  },

  getInitialState(){
    UserActions.index();
    return this.state.users;
  },

  isStateReady(){
    if(!this.state || !this.state.users || this.state.users.length < 1){
      return false;
    }
    return true;
  },

  onIndex() {
    if(!this.isStateReady()){  
      User.all().then(this.onSuccess,this.onError);
      return;
    }
    this.trigger(this.state.users);
  },

  onSuccess(response){
      this.state.users = response.data;
      this.trigger(this.state.users);
  },

  onError(err){
    console.log(err);
  },

  onDestroy(id){
    User.destroy(id).then(()=>{
      this.state = {
        users:[]
      };
      this.getInitialState();
    }) 
  }
});

export default UserStore;
