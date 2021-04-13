import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className='widgets__searchIcon' />
                <input placeholder='Search twitter' type='text' />
            </div>

            <div className='widgets__widgetContainer'>
                <h2> What's happening </h2>

                {/* <TwitterTweetEmbed tweetId={}  /> */}

                <TwitterTimelineEmbed 
                sourceType='profile'
                screenName='theraghavluthra'
                options={{ height: 400 }}
                />

                <TwitterShareButton  
                url={'https://www.instagram.com/raghavluthra10/'}
                options={{ text: '#reactjs is awesome', via: 'Raghav Luthra' }}
                />
            </div>
        </div>
    )
}

export default Widgets
