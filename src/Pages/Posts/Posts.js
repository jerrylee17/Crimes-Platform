import React, { Component } from 'react';
import FeedWall from '../../Components/Feed/FeedWall/FeedWall.js'


class Home extends Component {
  render() {

    return (
      <>
        <div>
          <FeedWall fieldPath='updated_time' directionStr='desc'/>
        </div>
      </>
    );
  }
}

export default Home;