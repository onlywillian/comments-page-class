import React from 'react';

import './Comment.css';

const Comment = ({ title, content, author }) => {
    return (  
        <div className="comment-block">
            <div className="block-title">{title}</div>
            <div className="block-content">{content}</div>
            <div className="author">
                <span>
                    Por: {author}
                </span>
            </div>
        </div>
    );
}
 
export default Comment;