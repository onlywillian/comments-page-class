import React from 'react';
import { useHistory } from 'react-router-dom';
import { TiArrowBack, TiPlus } from 'react-icons/ti';

import './Comments.css'

const Commentary = () => {
    const history = useHistory();

    function handleBackClick() {
        history.goBack();
    }

    return (  
        <div className="comments">
            <div className="comments-header">
                <TiArrowBack className="comments-buttons" onClick={handleBackClick}/>
                <TiPlus className="comments-buttons"/>
            </div>

            <div className="comments-area">
                <div className="comment-block">
                    a
                </div>
                <div className="comment-block">
                    a
                </div>
                <div className="comment-block">
                    a
                </div>
                <div className="comment-block">
                    a
                </div>
            </div>
        </div>
    );
}
 
export default Commentary;