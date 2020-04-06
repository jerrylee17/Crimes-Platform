import React, { Component } from 'react';
import './Home.css';
import Usercard from '../../Components/Auth/Usercard/Usercard.js';

class Home extends Component {
  render() {
    return (
      <>
        <div className='homeTitle'>
          <Usercard />
          <h1>Crimes Against Asians</h1>
          <br />
          <h3> About this platform </h3>
          The purpose of this website is to provide a platform for people
          to see the racism that Asians face. This website will pull
          data from different sources and sort the data into different
          categories, allowing news reporters and journalists to capture data easier.
        </div>

      </>
    );
  }
}

export default Home;