import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { auth } from '../../conection';
import { onAuthStateChanged } from 'firebase/auth';

import './index.css';

function Header(){
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        async function inicio(){
            onAuthStateChanged(auth, (user) => {
                //se tem user logado
                if(user){

                //ja logado
                setLogged(true);

                } else{
                //nao logado
                setLogged(false);
                }
            });
        }

        inicio();
    }, [])

    return(
        <header>
            <Link className='titulo button' to='/'>Inicio</Link>
            {
                logged ?
                    <Link className='titulo button' to='/Contact'>Contato</Link>
                    :
                    <></>
            }
            {
                logged ? 
                    <Link className='titulo button' to='/Admin'>Configuração</Link>
                    : 
                    <></>
            }
            {
                logged ? 
                        <Link className='titulo button active' to='/GetOut'>Sair</Link>
                    : 
                        <Link className='titulo button' to='/GetIn'>Entrar</Link>
            }
            
        </header>
    );
}

export default Header;