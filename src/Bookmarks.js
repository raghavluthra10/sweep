import React, { useEffect, useState } from 'react';
import db from './firebase';
import './Bookmarks.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { Avatar } from '@material-ui/core';


const Bookmarks = () => {

    const [ bookmarks, setBookmarks ] = useState([])

    useEffect(() => {
        db.collection('bookmarks').onSnapshot(snapshot => (
            setBookmarks(snapshot.docs.map(doc => ({ id: doc.id ,detail:doc.data()})))
        ))
    }, [])

    const removeBookmark = (e) => {
        e.preventDefault();

        bookmarks.map((bookmark) => {
            db.collection('bookmarks').doc(bookmark.id).delete();
        })
        
        
    }

    return (
        <div className='bookmarks' >
            <div className='bookmarks__banner'>
                <h1> Bookmarks </h1>
            </div>

            <div className='bookmarks__saved'>

                {bookmarks.map((bookmark) => (
                                <>
                                    <div className='bookmarks__avatar'>
                                    <Avatar src={bookmark.detail.avatar} />
                                    </div>
                
                                    <div className='bookmarks__body' >
                                            <div className='bookmarks_header'>
                                                <div className='bookmarks__headertext'>
                                                    <h3> 
                                                        {bookmark.detail.displayName}
                                                            <span className='bookmarks__headerSpecial'> 
                                                                {bookmark.detail.verified &&<VerifiedUserIcon className='bookmarks__badge' />} {bookmark.detail.userName}
                                                            </span> 
                                                    </h3>
                
                                                </div>
                
                                                <div className='bookmarks__headerDiscription' >
                                                        <p>
                                                        {bookmark.detail.text}
                                                    </p>
                                                </div>
                                            </div>
                
                                        <img 
                                        src={bookmark.detail.image} 
                                        alt=''
                                        />
                
                                        <div className='bookmarks__footer'>
                                            <ChatBubbleOutlineIcon fontSize='small' className='bookmarksComment' />
                                            <RepeatIcon fontSize='small' className='bookmarksRetweet' />
                                            <FavoriteBorderIcon fontSize='small' className='bookmarksLike' />
                                            <BookmarkBorderIcon fontSize='small' onClick={removeBookmark} className='bookmarksBookMark' />
                                        </div>
                                
                                    </div>
                                </>
                ))}

            

            </div>
        </div>
    )
}

export default Bookmarks
