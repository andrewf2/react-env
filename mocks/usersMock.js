var users = './users.js';

module.exports = {

	find(id){
		users.filter(function(user){
			return user.id = id;
		})
	}

}