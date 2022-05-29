import React from 'react';
import backgroundLogo from '../assets/images/background.svg';
import '../styles/login.scss'
import { FormEvent } from 'react';
import { api } from '../service/api';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';


function SignUp () {
    const navigate = useNavigate();
    
    async function HandleCreateAccount (event: FormEvent) {
        event.preventDefault()

        

        const name =  (document.getElementById('name_id') as HTMLInputElement).value;
        const email =  (document.getElementById('email_id') as HTMLInputElement).value;
        const password =  (document.getElementById('password_id') as HTMLInputElement).value;

        await api.post('/users/signup', {
            name,
            email,
            password
        }).then(() => navigate('/'))

    }

    return(
        <div id='page-auth'>
            <main>
                <div className='main-content'>
                    <h1>Seja bem vindo!</h1>
                    <h2>Registre-se abaixo.</h2>

                    <form>
                    <input 
                        className='input-text'
                         type="text" 
                        placeholder='Name' 
                        id='name_id'
                        />

                        <input
                        className='input-text'
                         type="text" 
                        placeholder='Email' 
                        id='email_id'
                        />
                        <input
                        className='input-text'
                         type="text" 
                        placeholder='Password' 
                        id='password_id'
                        />
                        <div>
                            <div className='inp-container'>
                            <input 
                            type="radio" />
                            <strong>Lembra-se</strong>
                            </div>
                        </div>
                        <button onClick={HandleCreateAccount}
                        type='submit'>
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