import React from 'react';

import './index.css';

function Curriculo(){
    return(
        <div className='curriculo'>
            <h1 className='titulo'>Currículo</h1>
            <br />
            <b className='texto'>Gabriel Fernandes Seguro Filho</b><br />
            <b className='texto'>Rua Amazonas Nº 332, Valentim Gentil, São Paulo</b><br />
            <b className='texto'>15 de abril de 1987</b><br />
            <b className='texto'>Solteiro</b><br />
            <b className='texto'>defren.gabriel@gmail.com</b><br />
            <b className='texto'>(17) 9-9197 0204</b><br />
            <br />
            <h2 className='titulo'>Objetivo:</h2>
            <ul>
                <li className='texto'>Desenvolvedor Front End</li>
            </ul>
            <br />
            <h2 className='titulo'>Qualificações:</h2>
            <ul>
                <li className='texto'>Profissional com 7 anos de experiência de mercado com foco na área de TI</li>
                <li className='texto'>Experiência com as Linguagens de Marcação HTML 5 e Estilização CSS 3</li>
                <li className='texto'>Experiência com Sistemas Operacionais Windows e Linux</li>
                <li className='texto'>Experiência com Git e versionamento de arquivos</li>
                <li className='texto'>Experiência com Manutenção de Computadores Desktop</li>
            </ul>
            <br />
            <h2 className='titulo'>Experiência Profissional:</h2>
            <b className='texto'>Empresa: </b><span className='texto'>DIP Produtos Artesanais</span><br />
            <b className='texto'>Período: </b><span className='texto'>De dezembro de 2009 até maio de 2017</span><br />
            <b className='texto'>Vaga: </b><span className='texto'>Suporte Técnico</span><br />
            <b className='texto'>Funções: </b><span className='texto'>Manter computadores e rede funcionando, orientar funcionários com relação a utilização de sistemas operacionais e programas</span><br />
            <b className='texto'>Resultados: </b>
            <ul>
                <li className='texto'>Um dos responsáveis pela migração do sistema operacional Windows 7 para Windows 10 em todas as máquinas o que reduziu os gastos com ferramentas de segurança</li>
                <li className='texto'>Um dos responsáveis pela substituição dos HDs da empresa por SSDs melhorando o ambiente de trabalho e agilizando as tarefas</li>
            </ul>
            <br />
            <h2 className='titulo'>Formação Profissional:</h2>
            <ul>
                <li className='texto'>Bacharelado em Engenharia de Computação, UNIFEV – Centro Universitário de Votuporanga</li>
            </ul>
            <br />
            <h2 className='titulo'>Idiomas:</h2>
            <ul>
                <li className='texto'>Português nativo do Brasil</li>
                <li className='texto'>Inglês intermediário</li>
            </ul>
            <br />
            <h2 className='titulo'>Cursos:</h2>
            <ul>
                <li className='texto'>Pacote Office 365 essencial</li>
                <li className='texto'>Produtividade no trabalho</li>
            </ul>
        </div>
    );
}

export default Curriculo;