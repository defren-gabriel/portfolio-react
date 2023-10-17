import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../conection';
import { signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';

import './index.css';

function GetIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function FazLogin(event){
        event.preventDefault();

        if (email !== '' && password !== ''){
            await signInWithEmailAndPassword(auth, email, password)
            .then(()=>{
                navigate('/', { replace: true });
            })
            .catch((error)=>{
                alert('Não foi possível fazer o login');
            })
        }
        else{
           alert('O email e senha não podem ficar vazios!');
        }
    };

    async function ResetarPassword(){
        if (email === ''){
            document.getElementById('email').focus();
        }
        else{            
            await sendPasswordResetEmail(auth, email)
            .then(()=>{
                alert('Um email foi enviado para você');
            })
            .catch((error)=>{
                alert('Houve um erro ao envia o email de verificação');
            })
        }
    };

    useEffect(() => {
        async function inicio(){
            onAuthStateChanged(auth, (user) => {
                if(user){
                //ja logado
                    navigate('/', { replace: true });
                } 
            });
        }

        inicio();

        document.getElementById('email').focus();
    }, [navigate]);

    return(
        <div id='container' className='texto'>
            <h1 className='titulo'>Já possui registro?</h1>
            <form onSubmit={FazLogin}>
                <input id='email'
                className='texto' 
                placeholder='Entre com o seu email'
                type='email'
                value={email}
                onChange={(event)=>setEmail(event.target.value)} />

                <input id='senha'
                className='texto'
                placeholder='Entre com a sua senha'
                type='password'
                value={password}
                onChange={(event)=>setPassword(event.target.value)} />

                <input className='texto button'
                type='submit'
                value='Entrar' />

                <hr />

                <input className='texto button'
                type='button'
                value='Esqueceu sua senha?'
                onClick={ResetarPassword} />
            </form>
            <Link className='texto button' to='/Register'>Ainda não possui registro? Registre-se!</Link>

        </div>
    );
}

export default GetIn;