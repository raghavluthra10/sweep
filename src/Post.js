import { Avatar, IconButton } from '@material-ui/core';
import React, { useState, forwardRef, useEffect } from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import db from './firebase';
import CommentModal from './CommentModal';



const Post = forwardRef(({ 
    displayName,
    userName,
    verified,
    text,
    image,
    avatar,
    docId
    }, ref) => {

    const [ showAddCommentModal, setShowAddCommentModal ] = useState(false);
        
    const bookmark = () => {
        db.collection("bookmarks").add({
            displayName: displayName,
            userName: userName,
            verified: verified,
            text: text,
            avatar: avatar,
            image: image
        })
    };

    const deleteTweet = (e) => {
        e.preventDefault();
        db.collection("posts").doc(docId).delete();
    };

    const viewAddCommentModal = () => {
        setShowAddCommentModal(true);

        // console.log(showAddCommentModal)
    }

    return (
        <>
            

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
                        <IconButton  onClick={viewAddCommentModal}>
                            <ChatBubbleOutlineIcon fontSize='small' className='postComment' />
                        </IconButton>
                        
                        <IconButton onClick={deleteTweet} >
                            <DeleteOutlineIcon fontSize='small' className='postRetweet' />
                        </IconButton>

                        <IconButton>
                            <FavoriteBorderIcon  fontSize='small' className='postLike' />
                        </IconButton>

                        <IconButton onClick={bookmark} >
                            <BookmarkBorderIcon fontSize='small' className='postBookMark' />
                        </IconButton>
                        
                        
                    
                    </div>
                
                </div>
            </div>
        </>
    )
})

export default Post
