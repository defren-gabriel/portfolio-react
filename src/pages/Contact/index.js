import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../conection';
import { onAuthStateChanged } from 'firebase/auth';
import { addDoc, getDocs, collection } from 'firebase/firestore';

import './index.css';

function Contact(){
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    const [enviar, setEnviar] = useState(false);

    const [proprietario, setProprietario] = useState(false);
    const [mensagens, setMensagens] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        // Checa se está logado
        async function inicio() {
            const user = await new Promise((resolve) => {
                onAuthStateChanged(auth, (user) => {
                    resolve(user);
                });
            });
    
            // Se tem usuário logado
            if (user) {
                setEmail(user.email);
                document.getElementById('nome').focus();
    
                if (user.uid === 'CFX55O5TFAUEpAZKK2Y74GwlQFY2') {
                    setProprietario(true);
                }
    
                // Carrega as mensagens
                getDocs(collection(db, 'mensagenspessoais'))
                    .then((snapshot) => {
                        let lista = [];
    
                        // Pega os dados e os transfere para a lista temporária e posteriormente os envia para posts
                        snapshot.forEach((doc) => {
                            lista.push({
                                id: doc.id,
                                email: doc.data().email,
                                nome: doc.data().nome,
                                mensagem: doc.data().mensagem
                            });
                        });
    
                        setMensagens(lista);
                    });
            } else {
                navigate('/GetIn', { replace: true });
            }
        }
    
        inicio();
    }, [navigate]);
    

    //habilita o botao de envio
    useEffect(()=>{
        if (nome !== '' && mensagem !== ''){
            setEnviar(true);
        }
        else
            setEnviar(false);
    }, [nome, mensagem]);

    //envia mensagem
    async function RegistraMensagem(event){
        event.preventDefault();

        await addDoc(collection(db, 'mensagenspessoais'), {
            email: email,
            nome: nome,
            mensagem: mensagem
        })
        .then(()=>{
            navigate('/', { replace: true });
        })
        .catch((error)=>{
            alert('Não foi possivel enviar a sua mensagem');
        })
    }

    return(
        //usar titulo ou texto para as classes de formatação de texto
        <div className='contato'>
            {
                proprietario ?
                    <h1 className='titulo sem-margem espaco-final1'>Mensagens recebidas</h1> 
                    :
                    <div></div>
            }
            {
                proprietario ?
                    mensagens.map((mensa)=>(
                        <div key={mensa.id} className='espaco-final2'>
                            <h2 className='titulo'>{mensa.nome}</h2>
                            <span className='texto'>{mensa.email}</span>
                            <p className='texto'>{mensa.mensagem}</p>
                        </div>
                    ))
                    :
                    <div></div>
            }
            <h1 className='titulo'>Contate o Gabriel</h1>
            <br />
            <form className='form' onSubmit={RegistraMensagem} autoComplete='off'>
                <label htmlFor='email' className='texto'>Seu email para contato</label>
                <input id='email'
                    className='texto' 
                    placeholder='Entre com o seu email'
                    type='email'
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)} />

                <label htmlFor='nome' className='texto'>Seu nome</label>
                <input id='nome' 
                    className='texto'
                    placeholder='Qual o seu nome?'
                    type='text'
                    value={nome}
                    onChange={(event)=>setNome(event.target.value)}
                />

                <label htmlFor='mensagem' className='texto'>Sua mensagem</label>
                <textarea id='mensagem'
                    rows='5'
                    className='texto'
                    placeholder='Digite aqui a sua mensagem'
                    value={mensagem}
                    onChange={(event)=>setMensagem(event.target.value)} />

                {
                    enviar ? 
                        <input className='texto button'
                            type='submit'
                            value='Enviar essa mensagem' /> :
                        <span className='texto'>Entre com o seu nome e mensagem para poder enviar</span>
                }
            </form>
        </div>
    );
}

export default Contact;