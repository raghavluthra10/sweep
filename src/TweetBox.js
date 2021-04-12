import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

const TweetBox = () => {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input' >
                    <Avatar  />
                    <input placeholder="What's happening?"  type='text' />
                </div>
                <input className='tweetBox__inputImage' placeholder='Enter image URL' type='text'  />

                <Button className='tweetBox__tweetButton'> Sweep </Button>
            </form>
        </div>
    )
}

export default TweetBox
