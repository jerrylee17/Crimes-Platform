import React from 'react';
import {
  Container,
  Card,
  CardTitle,
  CardText
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
                <Card className="titleStyle">
                  <CardTitle className='text-center'>
                    Post #{index + 1}
                  </CardTitle>
                  <CardText>
                    {object.content.split(' ').slice(0, 50).join(' ')}
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
