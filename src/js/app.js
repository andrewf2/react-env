import Router from './router.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
window.baseUrl = "";
window['_'] = require('lodash');
window['Promise'] = require('bluebird');


document.addEventListener('DOMContentLoaded', function() {
	const appDiv = document.getElementById('content');
	ReactDOM.render(React.createElement(Router),appDiv)
});

