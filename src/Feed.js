import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

const Feed = () => {
    return (
        <div className='feed'>
            {/* Header */}
            <div className='feed__header'>
                <h2> Home </h2>
            </div>
            
            {/* TweetBox*/}
            <TweetBox  />

            {/* Post */}
            <Post  />
            
        </div>
    )
}

export default Feed