import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardTitle,
  CardText,
  CardImg,
  Button
} from 'reactstrap';
import './Tab.css';


export default function Tab(props) {
  const {
    name,
    posts
  } = props;
  console.log(posts);

  return (
    <>
      <br />
      <h1>{name}</h1>
      <br />
      <Container fluid>
        <section className='grid'>
          {posts && posts.length ? (
            posts.map((object, index) => {
              return (
                <Card className="postCardStyle">
                  <CardTitle className='text-center'>
                    Post #{index}
                  </CardTitle>
                  <CardText>
                    {object.content}
                    {object.content.split(' ').slice(0, 30).join(' ')}
                  </CardText>
                </Card>
              );
            })
          ) : (
            <h1>No posts yet!</h1>
          )}
        </section>
      </Container>
    </>
  );
}
