import React from 'react';

import ErrorModal from '../UIComponents/ErrorModal';
import Modal from '../UIComponents/Modal';
import LoadingSpinner from '../UIComponents/LoadingSpinner';
import Card from '../UIComponents/Card';

import './PostItem.css';

const PostItem = props => {

  return (
    <React.Fragment>
      <li className="post-item">
        <Card className="post-item">
          {/* {isLoading && <LoadingSpinner asOverlay />} */}
          <div className="post-item__image">
            <img src={props.image} />
          </div>
          <div className="post-item__info">
            <p>{props.content}</p>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PostItem;
