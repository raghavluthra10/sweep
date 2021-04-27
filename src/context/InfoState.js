import React from 'react';
import InfoContext from './infoContext';

const InfoState = (props) => {

    const posts = [{
        avatar: '',
        displayName:'',
        image: '',
        text: '',
        userName: '',
        verified: null,
    }]
   

    return (
        <InfoContext.Provider value={posts}>
            {props.children}
        </InfoContext.Provider>
    )
}

export default InfoState;
