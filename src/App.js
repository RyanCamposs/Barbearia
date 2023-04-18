import React, { useState } from 'react';
import imagem from './barbearia-logo.png';
import dark from './moon.png';
import light from './sun.png'
import './App.css';

function App() {

    const [novaCor, setNovaCor] = useState('bg-white');
    const [change, setNovaImagem] = useState(dark);
    const [changetext, setNovoTexto] = useState('Dark')
    

  function changeTheme() {  
    if (novaCor === "bg-white") {
        setNovaCor("bg-black")
        setNovaImagem(light)
        setNovoTexto("Light")
    }else {
        setNovaCor("bg-white")
        setNovaImagem(dark)
        setNovoTexto("Dark")
    }

  }


  return (
    <div className={novaCor} id="body">
    <div className={novaCor}>
        <div className="header">
        <img src={imagem} className="logo"></img>

        <button className="option" onClick={changeTheme}>
        <img src={change} className="dark-img"></img>
        <label>{changetext}</label>
        </button>
        </div>
        </div>
    


        <div className="content">
            <div className="imagem-div"></div>
            <div className="texto-div">
                <h1>Bem-vindo a Barber Shop</h1>
                <h3>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas</h3>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoa e você nunca ficará desapontado.</p>
            </div>


        </div>
    
        </div>
  );
}

export default App;
