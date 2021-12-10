import React, { useState } from 'react';
import axios from 'axios';

import './CreatePage.css';

import Button from './Button';

const CreatePage = ({ on, setOn, com, setCom }) => {
    const [newComment, setNewComment] = useState({
        title: "ajskfjakf",
        content: "asfjkalfjhaskf",
        author: "willllll"
    });

    function handleSendClick() {
        setOn(false);

        console.log(newComment);

        async function fetchData() {
            await axios.post("https://comments-backend-1c.herokuapp.com/api/v1/comments", newComment)
                .then(data => console.log(data.data))
                .catch()
        }
        fetchData();
    }

    function handleCancelClick() {
        setOn(false);
    }

    return (  
        <div style={on? {display: 'flex'} : {display: 'none'}} className="create-page-container">
            <div className="create-page">
                <label htmlFor="title">Titulo: </label> 
                <input id="title" type="text" onChange={(e) => setNewComment({...newComment, title: e.target.value})} placeholder="Sem titulo"/>
                <label htmlFor="content">Conteudo: </label>
                <input id="content" type="text" onChange={(e) => setNewComment({...newComment, content: e.target.value})} placeholder="O texto fica aqui"/>
                <label htmlFor="author">Autor: </label>
                <input id="author" type="text" onChange={(e) => setNewComment({...newComment, author: e.target.value})} placeholder="Anônimo"/>

                <div>
                    <Button onclick={handleCancelClick}>Cancelar</Button>
                    <Button onclick={handleSendClick}>Enviar</Button>
                </div>
            </div>
        </div>
    );
}
 
export default CreatePage;