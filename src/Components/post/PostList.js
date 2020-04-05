import React from 'react';

import Card from '../UIComponents/Card';
import PostItem from './PostItem';

import './PostList.css';

const PostList = props => {
  if (props.items.length === 0) {
    return (
      <div className="post-list center">
        <Card>
          <h3>No posts yet</h3>
        </Card>
      </div>
    );
  }
  return (
    <ul className="post-list">
      {props.items.map(place => (
        <PostItem
          key={place.id}
          id={place.id}
          image={place.image}
          content={place.content}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
};

export default PostList;
