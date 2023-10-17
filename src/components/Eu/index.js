import React, { useState, useEffect, useCallback } from 'react';

import './index.css';

import eu1 from './imagens/1.png';
import eu2 from './imagens/2.png';
import eu3 from './imagens/3.png';
import eu4 from './imagens/4.png';

const eus = [eu1, eu2, eu3, eu4];

function Eu(){
    const [indice, setIndice] = useState(0);

    const SelecionaIndice = useCallback(()=>{
        const i = indice;

        if (indice < 3){
            setIndice(i + 1);
        }
        else {
            setIndice(0);
        }
    }, [indice]);

    useEffect(()=>{
        const i = setInterval(SelecionaIndice, 1000); // Mudar a cada 2 segundos
    
        return () => {
            clearInterval(i); // Limpar o intervalo quando o componente for desmontado
        };
    }, [SelecionaIndice]);

    return(
        <div className='eu-container'>
            <img src={eus[indice]} alt='Isso, ele mesmo' />
            <section>
                <h1 className='titulo'>Gabriel Fernandes</h1>
                <span className='texto'>Engenheiro de Computação</span>
                <span className='texto'>Desenvolvedor Front End</span>
            </section>
        </div>
    );
}

export default Eu;