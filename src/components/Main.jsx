import React from 'react';
import {useHistory} from 'react-router-dom';

import Image from '../assets/commentary_vector.png'

import Button from './Button';
import './Main.css';

const Main = () => {
    const history = useHistory();
    function handleButtonPageClick() {
        history.push("comentários");
    }

    return ( 
        <div className="main">
            <div className="left-content">
                <p>Vamos fazer alguns comentários?</p>

                <div className="main-desc">
                    Click no botão abaixo e entre para compartilhar suas
                    opiniões com a galerinha do primeiro C!
                </div>
                <Button onclick={handleButtonPageClick}>Comentários</Button>
            </div>
            
            <img src={Image} alt="Aq era pra ter uma imagem parceiro(a)" />
        </div>
    );
}
 
export default Main;