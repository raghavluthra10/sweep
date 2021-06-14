import React from 'react';
import styled from 'styled-components';

const CommentModal = () => {
    return (
        <Background >
            <Modal>
                hi
            </Modal>
        </Background>
        
    )
}

export default CommentModal;

const Modal = styled.div`

`;

const Background = styled.div`
    position: absolute;
    background-color: yellow;
`;