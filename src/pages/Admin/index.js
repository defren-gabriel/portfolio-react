import React, { useState, useEffect } from 'react';

import { auth } from '../../conection';
import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';

import './index.css';

function Admin(){
    const [resetPassword, setResetPassword] = useState(false);
    const [email, setEmail] = useState('Buscando');

    useEffect(() => {    
        async function inicio(){
            onAuthStateChanged(auth, (user) => {
               //se tem user logado
               if(user){
                  //user.email
                  setEmail(user.email);
              } else{
                  //nao possui user logado
                  setEmail('Email indefinido - possivel erro');
               }
            });
        }
   
        inicio();
    }, []);
   

    async function ResetarSenha(event){
        event.preventDefault();

        await sendPasswordResetEmail(auth, email)
        .then(()=>{
            setResetPassword(true);
        })
        .catch((error)=>{
            alert('Houve um erro ao envia o email de verificação');
        });
    }

    return(
        <div className='cont-sec'>
            <h1 className='titulo'>Configurações da conta</h1>
            <form onSubmit={ ResetarSenha }>
                <span className='texto'>Logado como: { email }</span>
                <button type='submit' className='texto'>Resetar a senha da conta</button>
                {
                    resetPassword ?
                    <span className='texto alerta'>Um email de verificação foi enviado para você.</span> :
                    <span></span>
                }
            </form>
        </div>
    );
}

export default Admin;