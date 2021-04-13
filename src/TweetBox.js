import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import './TweetBox.css';
import db from './firebase';
const TweetBox = () => {

    const [ tweetMessage, setTweetMessage ] = useState('');
    const [ tweetImage, setTweetImage ] = useState('');

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Raghav Luthra',
            userName: 'raghavluthra',
            verified: true,
            text: tweetMessage,
            avatar: '',
            image: tweetImage
        })

        setTweetMessage('')
        setTweetImage('')

    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input' >
                    <Avatar  />
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)} 
                        value={tweetMessage}  
                        placeholder="What's happening?"  
                        type='text' 
                    />
                </div>

                <input 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className='tweetBox__inputImage' 
                    placeholder='Optional: Enter image URL' 
                    type='text'  
                />

                <Button type='submit' onClick={sendTweet} className='tweetBox__tweetButton'> Tweet </Button>
            </form>
        </div>
    )
}

export default TweetBox
