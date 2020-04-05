import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import PostList from '../../Components/post/PostList'
import ErrorModal from '../../Components/UIComponents/ErrorModal'
import LoadingSpinner from '../../Components/UIComponents/LoadingSpinner'

const Posts = () => {
  const [loadedPosts, setLoadedPosts] = useState();
  // const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         `http://localhost:5000/posts`
  //       );
  //       setLoadedPosts(responseData.posts);
  //     } catch (err) {}
  //   };
  //   fetchPosts();
  // }, [sendRequest]);

  const DUMMYYPOSTS = [
    {
      id: '1',
      image: 'https://i.kym-cdn.com/entries/icons/original/000/022/134/elmo.jpg',
      content: 'boop'
    },
    {
      id: '2',
      image: 'https://i.kym-cdn.com/entries/icons/original/000/022/134/elmo.jpg',
      content: 'boop numero dos'
    }
  ]

  return (
    <React.Fragment>
      {/* <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && ( */}
        <PostList items={DUMMYYPOSTS}/>
      {/* )} */}
    </React.Fragment>
  )
}

export default Posts
