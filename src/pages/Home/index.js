import React from 'react';

import Eu from '../../components/Eu';
import Progresso from '../../components/Progresso';
import Curriculo from '../../components/Curriculo';

function Home(){
    return(
        //usar titulo ou texto para as classes de formatação de texto
        <div>
            <Eu />
            <br />
            <Progresso titulo='2023 - ReacJS, mas que diabos?' descricao='Quando eu achava que sabia fazer paginas WEB comecei a segunda parte do estudo Dev que foi ReacJS, que coisa mais complicada.' />
            <Progresso titulo='2022 - Dev Front End' descricao='Passei o ano de 2022 estudando uma das coisas que mais me foram desafiantes, HTML! Eu nunca soube sequer fazer uma pagina WEB simples, comprei um dos cursos com mais mensoes positivas na Udemy e estudei sério.' />
            <Progresso titulo='2017 - A crise' descricao='Depois de 7 anos e meio precisei parar de trabalhar para ajudar minha família.' />
            <Progresso titulo='2010 - O primeiro emprego' descricao='Com o fim da faculdade eu consegui meu primeiro emprego na DIP, amigos incríveis os que eu ali fiz.' />
            <Progresso titulo='2009 - Fim da faculdade' descricao='Conclusão do curso de Engenharia de Computação na UNIFEV - Centro Universitário de Votuporanga.' />
            <Progresso titulo='2008 - Inicio do estágio' descricao='Comecei a trabalhar como estagiário na DIP - Produtos artesanais fazendo o basico, mantendo computadores e rede funcionando e auxiliando o pessoal.' />
            <Progresso titulo='2004 - A faculdade' descricao='Como eu já tinha mostrado interesse em computadores decidi cursar Engenharia de Computação, uma experiência incrível, mesmo sendo uma época difíciu.' />
            <Progresso titulo='2002 - O início' descricao='Meu primeiro contato com computadores foi em 2002 quando meus pais me deram um PC Pentium 4, como qualquer criança usei a máquina para o mau, para jogos e internet sem objetivo. Haha!' />
            <br />
            <Curriculo />
            <br />
            <br />
        </div>
    );
}

export default Home;