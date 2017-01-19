import Reflux from 'reflux';
import User from '../lib/services/users';

const UserActions = Reflux.createActions([
	"index",
	"viewUser",
	"destroy"
]);


export default UserActions
