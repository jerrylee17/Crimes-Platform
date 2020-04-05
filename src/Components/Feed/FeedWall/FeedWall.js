import React, {Suspense} from 'react';
import Post from '../Post/Post'
import { useFirestore, SuspenseWithPerf, useFirestoreCollectionData } from 'reactfire';
import { initializeApp } from 'firebase';


//scuffed

function UnsuspenseFeed(props){
    console.log(props.props.fieldPath);
    const colRef = useFirestore()
        .collection('posts')
        //.where(props.fieldPath,props.opStr,props.value)
        .orderBy(props.props.fieldPath || 'updated_time', props.props.directionStr || 'desc')
        .limit(props.props.limit || 10);

    // subscribe to the doc. just one line!
    const collection= useFirestoreCollectionData(colRef);
    console.log(collection);
    return collection.map(doc => <Post id={doc.id} message={doc.message} story={doc.story} updated_time={doc.updated_time} />)
}
function FeedWall(props) {

    return (
        <SuspenseWithPerf
            fallback={'loadings...'}
            traceId={'load-status'}
        >
            <div>
                <UnsuspenseFeed props={props} />
                </div>
        </SuspenseWithPerf>
    );

}

export default FeedWall