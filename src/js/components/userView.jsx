import UserStore from '../stores/UserStore';
import UserActions from '../actions/UserActions.js';
import NavigationActions from '../actions/NavigationActions.js';
import React from 'react';
import Reflux from 'reflux';

const UserView = React.createClass({

  mixins: [Reflux.connectFilter(UserStore, 'user',function(users){
      return _.find(users, (user) => user.id == this.props.params.id)
  })],

  onClick(id){
    UserActions.destroy(id);
    NavigationActions.goTo('/');
  },

  render: function() {
    if(this.state.user){
      const user = this.state.user;
      return (
        <div>
          <p>{user.firstName}</p>
          <p>{user.emailAddress}</p>
          <button className = "btn btn-danger" 
            type = "button" 
            onClick = {this.onClick.bind(null,user.id)}>
            Delete
          </button>
        </div>
      );
    } else {
        return(<div>Fail</div>);
    }
  }
});

export default UserView