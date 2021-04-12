import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = ({ 
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
    }) => {
    return (
        <div  className='post'>
            <div className='post__avatar'>
                <Avatar src='' />
            </div>

            <div className='post__body' >
                <div className='post_header'>
                    <div className='post__headertext'>
                        <h3> 
                            Raghav Luthra 
                                <span className='post__headerSpecial'> 
                                    <VerifiedUserIcon className='post__badge' /> 
                                </span> 
                        </h3>

                    </div>

                    <div className='post__headerDiscription' >
                        <p>
                            So take 80px of the top and bottom of the original image 
                            produces the square with the image I want to see. I then want
                            to make that into a circle.
                        </p>
                    </div>
                </div>

                <img 
                src='https://images.unsplash.com/photo-1487261223852-b16570f72dfb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80' 
                alt=''
                 />

                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            
            </div>
        </div>
    )
}

export default Post
