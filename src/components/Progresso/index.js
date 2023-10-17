import React from 'react';

import './index.css';

function Progresso(props){
    return(
        <div className='progresso'>
            <div className='progresso-imgs'>
                <div className="bola"></div>
                <div className="barra"></div>
            </div>
            <div className='progresso-info'>
                <h2 className='titulo'>{props.titulo}</h2>
                <span className='texto'>{props.descricao}</span>
            </div>
        </div>
    );
}

export default Progresso;