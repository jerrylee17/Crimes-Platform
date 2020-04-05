import React from 'react';
import { useFirestoreDocData, useFirestore, SuspenseWithPerf } from 'reactfire';

//scuffed


function UnsuspenseHotPost(props) {
    //Please note the id of the facebook post is DIFFERENT than the props.id (firestore id)


    const postRef = useFirestore()
        .collection('posts')
        .doc(props.id);

    const post = useFirestoreDocData(postRef);


    return (
        <UnsuspenseColdPost props={{ xid: props.id, ...post }} />
    );

}

function UnsuspenseColdPost(props) {
    //Please note the id of the facebook post is DIFFERENT than the props.id (firestore id)

    /*
    * post.message = String of what the user comments on the post
    * post.updated_time = UNFORMATTED timestamp of when the user last edited on facebook
    * post.id = facebook id of the post
    * post.categories = null for now but please implement some kind of tags or categories taking in a String Array
    * post.media - not implemented yet 
    */
   
    return (
        <div className="post">
            <p>{props.props.xid}</p> <p>{props.props.id}</p> <h1> {props.props.message || props.props.story }</h1> <p> {props.props.updated_time} </p>
        </div>
    );

}

function Post(props) {
    console.log(props);
    return (
        <SuspenseWithPerf
            fallback={'loadings...'}
            traceId={'load-status'}
        >
            { (!props.updated_time) ? <UnsuspenseHotPost id={props.id} />: <UnsuspenseColdPost props={props} />}
        </SuspenseWithPerf>
    );
}

export default Post