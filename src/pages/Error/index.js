import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Error(){
    return(
        //usar titulo ou texto para as classes de formatação de texto
        <div>
            <p className='texto'>Essa pagina não existe, volte ao <Link to='/'>inicio</Link></p>
        </div>
    );
}

export default Error;