import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

const Feed = () => {

    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id:doc.id , detail: doc.data()})))
        ))
    }, [])

    return (
        <div className='feed'>
            <div className='feed__header'>
                <h2> Home </h2>
            </div>

            <TweetBox  />

            <FlipMove>
                {posts.map(post => (
                    <Post  
                    key={post.detail.text}
                    displayName={post.detail.displayName}
                    userName={post.detail.userName}
                    verified={post.detail.verified}
                    text={post.detail.text}
                    avatar={post.detail.avatar}
                    image={post.detail.image}
                    docId={post.id}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
