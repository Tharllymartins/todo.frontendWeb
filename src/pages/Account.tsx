import React, { FormEvent, useContext, useState } from 'react';
import backgroundLogo from '../assets/images/background.svg';
import '../styles/login.scss'
import {Link, useNavigate} from 'react-router-dom'

import { AuthContext }  from '../context/auth';




function Account () {
    const navigate = useNavigate();
    const context = useContext(AuthContext);

    async function HandleLogin (event: FormEvent){
        event.preventDefault();

        
        const email =  (document.getElementById('id_email') as HTMLInputElement).value;
        const password =  (document.getElementById('id_password') as HTMLInputElement).value;

        const logged = await context.Login({email, password})

        
    }

     if(context.userSession?.user) {
         navigate("/home")
 }

    return(
        <div id='page-auth'>
            <main>
                <div className='main-content'>
                    <h1>Seja bem vindo!</h1>
                    <h2>Faça login abaixo.</h2>

                    <form >
                        <input
                        className='input-text'
                        type="text" 
                        placeholder='Email'
                        id='id_email'/>  

                        <input
                        className='input-text'
                        type="password" 
                        placeholder='Password' 
                        id='id_password'
                        />
                        
                        <div>
                            <div className='inp-container'>
                            <input 
                            type="checkbox" />
                            <strong>Lembra-se</strong>
                            </div>
                            <a>Esqueci minha senha</a>
                        </div>
                        <button onClick={HandleLogin} type='submit'>
                            Login
                        </button>
                        <div className='text-container'> <strong>  Não possui uma conta?   <Link to={'/SignUp'}> Registre-se </Link>   agora!  </strong></div>
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

export default Account;


