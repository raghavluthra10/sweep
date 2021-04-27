import { Avatar } from '@material-ui/core';
import React, { useState, forwardRef, useEffect } from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import db from './firebase';

const Post = forwardRef(({ 
    displayName,
    userName,
    verified,
    text,
    image,
    avatar,
    docId
    }, ref) => {

    
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    const bookmark = (e) => {
        e.preventDefault();

       
            // db.collection('bookmarks').doc(docId).add({
            //     displayName: posts.displayName,
            //     userName: posts.userName,
            //     verified: posts.verified,
            //     text: posts.text,
            //     avatar: posts.avatar,
            //     image: posts.image
            // })
      
    }

    const deleteTweet = (e) => {
        e.preventDefault();

        db.collection("posts").doc(docId).delete();
    }


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
                    <DeleteOutlineIcon fontSize='small' className='postRetweet' onClick={deleteTweet} />
                    <FavoriteBorderIcon fontSize='small' className='postLike' />
                    <BookmarkBorderIcon fontSize='small' className='postBookMark' onClick={bookmark} />
                </div>
            
            </div>
        </div>
    )
})

export default Post
