import React, { useState } from 'react';

import './CreatePage.css';

import Button from './Button';

const CreatePage = ({ on, setOn, com, setCom }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    function handleSendClick() {
        const newComments = {
            id: Math.random() * 10,
            title: title,
            content: content,
            author: author
        }

        setCom([...com, newComments]);
        setOn(false);
    }

    function handleCancelClick() {
        setOn(false);
    }

    return (  
        <div style={on? {display: 'flex'} : {display: 'none'}} className="create-page-container">
            <div className="create-page">
                <label htmlFor="title">Titulo: </label> 
                <input id="title" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Sem titulo"/>
                <label htmlFor="content">Conteudo: </label>
                <input id="content" type="text" onChange={(e) => setContent(e.target.value)} placeholder="O texto fica aqui"/>
                <label htmlFor="author">Autor: </label>
                <input id="author" type="text" onChange={(e) => setAuthor(e.target.value)} placeholder="Anônimo"/>

                <div>
                    <Button onclick={handleCancelClick}>Cancelar</Button>
                    <Button onclick={handleSendClick}>Enviar</Button>
                </div>
            </div>
        </div>
    );
}
 
export default CreatePage;