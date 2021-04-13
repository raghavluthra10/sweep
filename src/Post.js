import { Avatar } from '@material-ui/core';
import React, { useState, forwardRef } from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

const Post = forwardRef(({ 
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
    }, ref) => {

        const [ postLike, setPostLike ] = useState();

    return (
        <div  className='post' ref={ref}>
            <div className='post__avatar'>
                <Avatar src={avatar} />
            </div>

            <div className='post__body' >
                <div className='post_header'>
                    <div className='post__headertext'>
                        <h3> 
                            {displayName}
                                <span className='post__headerSpecial'> 
                                    {verified &&<VerifiedUserIcon className='post__badge' />} {userName}
                                </span> 
                        </h3>

                    </div>

                    <div className='post__headerDiscription' >
                        <p>
                            {text}
                        </p>
                    </div>
                </div>

                <img 
                src={image} 
                alt=''
                 />

                <div className='post__footer'>
                    <ChatBubbleOutlineIcon fontSize='small' className='postComment' />
                    <RepeatIcon fontSize='small' className='postRetweet' />
                    <FavoriteBorderIcon fontSize='small' className='postLike' />
                    <PublishIcon fontSize='small' className='postBookMark' />
                </div>
            
            </div>
        </div>
    )
})

export default Post
