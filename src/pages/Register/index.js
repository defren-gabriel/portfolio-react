import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../conection';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import './index.css';

function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function RegistraUsuario(event){
        event.preventDefault();

        if (email !== '' && password !== ''){
            await createUserWithEmailAndPassword(auth, email, password)
            .then(()=>{
                //configurar a criação do favoritos web
                navigate('/', { replace: true });
            })
            .catch((error)=>{
                alert('Não foi possivel fazer o registro');
                console.log(error);
            })
        }
        else{
           alert('O email e senha não podem ficar vazios!');
        }
    }

    useEffect(() => {
        async function inicio(){
            onAuthStateChanged(auth, (user) => {
                //se tem user logado
                if(user){
                    //ja logado
                    navigate('/', { replace: true });
                }
            });
        }

        inicio();

        document.getElementById('email').focus();
    }, [navigate])

    return(
        <div id='container' className='texto'>
            <h1 className='titulo'>Ainda não possui registro?</h1>
            <form onSubmit={RegistraUsuario}>
                <input className='texto'
                placeholder='Entre com o seu email'
                type='email'
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
                id='email' />

                <input className='texto'
                placeholder='Entre com a sua senha'
                type='password'
                value={password}
                onChange={(event)=>setPassword(event.target.value)} />

                <input className='texto button'
                type='submit'
                value='Registrar e entrar' />
            </form>
            <Link className='texto button' to='/GetIn'>Já possui registro? Entre!</Link>
        </div>
    );
}

export default Register;