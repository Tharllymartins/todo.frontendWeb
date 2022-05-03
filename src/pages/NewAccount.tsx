import React from 'react';
import backgroundLogo from '../assets/images/background.svg';
import '../styles/home.scss'

import {Link, useNavigate} from 'react-router-dom'




function SignUp () {
    return(
        <div id='page-auth'>
            <main>
                <div className='main-content'>
                    <h1>Seja bem vindo!</h1>
                    <h2>Registre-se abaixo.</h2>

                    <form action="#">
                    <input 
                        className='input-text'
                         type="text" 
                        placeholder='name' />

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
                        </div>
                        <button type='submit'>
                        Registre-se
                        </button>
                        <div className='text-container'> <strong>  Já possui uma conta?  Faça <Link to={'/'}> Login </Link>   agora!  </strong></div>
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

export default SignUp;