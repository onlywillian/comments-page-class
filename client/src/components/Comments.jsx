import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TiArrowBack, TiPlus } from 'react-icons/ti';

import './Comments.css'

import Comment from './Comment';
import CreatePage from './CreatePage';

const Commentary = () => {
    const history = useHistory();
    const [createDisplay, setCreateDisplay] = useState(false);

    const [comments, setComments] = useState([
        {
            id: 1,
            title: "O Willian é muito lindo",
            content: "Cara tu viu como ele é lindo? E ainda faz programa.",
            author: "Anônimo",
        },
    ]);

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