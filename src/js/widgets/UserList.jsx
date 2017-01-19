import React from 'react';
import Reflux from 'reflux';
import NavigationActions from '../actions/NavigationActions.js';

const UserList = React.createClass({
	onClick(user){
		NavigationActions.goTo('/users/'+user.id)
	},

	render(){
		const users = this.props.users;
		var onClick = this.onClick;

		return(
			<ul className = "list-group">
			{users.map((user) =>
			  	<li className = "list-group-item" key = {user.id}>
          	<div>
            	<p>{user.emailAddress}</p>
            	<button className="btn btn-primary" type="button" onClick = {onClick.bind(null,user)}>View</button>
          	</div>
        	</li>
			)}
			</ul>
		)
	}
});

export default UserList;