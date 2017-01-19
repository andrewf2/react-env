import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Home from './components/home.jsx';
import UserView from './components/userView.jsx';
import UsersIndex from './components/usersIndex.jsx';


const HomeRouter = React.createClass({
	render() {
		return(
			<Router history={browserHistory}>
				<Route path="/" component={Home}>
					<IndexRoute component={UsersIndex} />
					<Route path="/users" component={UsersIndex} />
					<Route path="/users/:id" component={UserView} />
				</Route>
			</Router>
		);
	}
});

export default HomeRouter;