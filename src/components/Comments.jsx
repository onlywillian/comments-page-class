import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { TiArrowBack, TiPlus } from 'react-icons/ti';

import './Comments.css'

import Comment from './Comment';
import CreatePage from './CreatePage';

const Commentary = () => {
    const history = useHistory();
    const [createDisplay, setCreateDisplay] = useState(false);
    
    const [comments, setComments] = useState([]);

    useEffect(async () => {
        const data = await axios.get("https://comments-backend-1c.herokuapp.com/api/v1/comments");

        setComments(data.data.data);

        console.log(data);
    }, [comments]);

    function handleBackClick() {
        history.goBack();
    }

    function handleCreateClick() {
        setCreateDisplay(true);
    }

    return (  
        <div className="comments">
            <CreatePage on={createDisplay} setOn={setCreateDisplay} com={comments} setCom={setComments}/>

            <div className="comments-header">
                <TiArrowBack className="comments-buttons" onClick={handleBackClick}/>
                <TiPlus onClick={handleCreateClick} className="comments-buttons"/>
            </div>

            <div className="comments-area">
                {comments.map(comment => (
                    <Comment key={comment.id} title={comment.title} 
                            content={comment.content} author={comment.author}/>
                ))}
            </div>
        </div>
    );
}
 
export default Commentary;