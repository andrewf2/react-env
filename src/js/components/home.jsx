import UserStore from '../stores/UserStore';
import Layout from './layout.jsx';
import React from 'react';


const Home = React.createClass({
  render(){
    return(
      <Layout>
      	{this.props.children}
      </Layout>
    );
  }
});

export default Home;
