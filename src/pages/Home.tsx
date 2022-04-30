import React from 'react';
import backgroundLogo from '../assets/images/background.svg';
import '../styles/home.scss'
function Home () {
    return(
        <div id='page-auth'>
            <main>
                <div className='main-content'>
                    <h1>Seja bem vindo!</h1>
                    <h2>Faça login abaixo.</h2>

                    <form action="#">
                        <input 
                        className='input-text'
                         type="text" 
                        placeholder='Email' />
                        <input
                        className='input-text'
                         type="text" 
                        placeholder='Password' />
                        <div>
                            <div className='inp-container'>
                            <input 
                            type="radio" />
                            <strong>Lembra-se</strong>
                            </div>
                            <a>Esqueci minha senha</a>
                        </div>
                        <button type='submit'>
                            Login
                        </button>
                        <div className='text-container'> <strong>  Não possui uma conta?   <a href=""> Registre-se </a>   agora!  </strong></div>
                    </form>
                </div>
            </main>
            <aside>
                <img src={backgroundLogo} alt="Todo" />
                <strong>Seu espaço pessoal de anotações!</strong>
                <p>Nunca mais esqueça suas tarefas, organize como desejar!</p>
            </aside>
        </div>
    );
}

export default Home;