import React, { useState, useEffect } from 'react';
import Tab from './Tab';

export default function TabDisplay(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const name = props.name.replace(/\s/g, '').toLowerCase();

  useEffect(() => {
    fetch('http://localhost:9000/postCol')
      .then(res => res.json())
      .then(
        (result) => {
          console.log(name, result);
          result = Object.values(result).filter(x => x.category.substr(0, 3) === name.substr(0, 3) ||
            x.subcategory.substr(0, 3) === name.substr(0, 3));
          console.log(result);
          setIsLoaded(true);
          setPosts(Object.values(result));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [name]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Tab name={props.name} posts={posts} />
      </div>
    );
  }
}
