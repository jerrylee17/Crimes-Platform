import React, { useState } from 'react';
import {
  Container,
  Card,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';
import './Tab.css';


export default function Tab(props) {
  const {
    name,
    posts
  } = props;
  const [preview, setPreview] = useState(false);
  const [content, setContent] = useState('');

  return (
    <>
      <br />
      <h1>{name}</h1>
      <br />
      <Container fluid>
        <section className='grid'>
          {posts && posts.length ? (
            posts.map((object, index) => {

              if (object.message) {
                return (
                  <>
                    <Card className="postCardStyle"
                      onClick={() => {
                        setPreview(true);
                        setContent(object.message);
                      }
                      }
                    >
                      <CardTitle className='text-center'>
                        Post #{index + 1}
                      </CardTitle>
                      <CardText>
                        {object.message.split(' ').slice(0, 50).join(' ')}
                      </CardText>
                    </Card>
                    <Modal isOpen={preview}
                      toggle={() => {
                        setPreview(!preview);
                      }}
                      size='xl'
                    >
                      <ModalHeader>
                        Full Post
                      </ModalHeader>
                      <ModalBody>
                        {content}
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color='danger'
                          style={{
                            float: 'left'
                          }}
                          onClick={() => {
                            setPreview(false);
                          }}
                        >
                          Back
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </>
                );
              } else{
                return <></>;
              }
            })
          ) : (
            <h1>No posts yet!</h1>
          )}
        </section>
      </Container>

    </>
  );
}
