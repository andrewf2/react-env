import UserStore from '../stores/UserStore';
import Reflux from 'reflux';
import UserActions from '../actions/UserActions.js';
import NavigationActions from '../actions/NavigationActions.js';
import React from 'react';
import UserList from '../widgets/UserList.jsx';

const User = React.createClass({
  mixins: [Reflux.connect(UserStore, 'users')],

  getInitialState(){
    return UserStore.state.users;
  },

  goToUser(user) {
    NavigationActions.goTo('/users/'+user.id);
  },

  render() {
    if(this.state.users.length > 0){
      var users = this.state.users;
      return (
        <div className="col-md-6">
          <UserList users = {this.state.users}/>
        </div>
      )
    } else {
        return(<div>No Users</div>)
    }
  }
});

export default User;