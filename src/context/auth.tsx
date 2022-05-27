
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../service/api';


interface AuthProviderProps {
  children: ReactNode
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string | null;
  }
}

interface AuthRequest {
  email: string;
  password: string
}

interface AuthContextData {
  Login({email, password}: AuthRequest): Promise<void>;
  userSession: AuthResponse | undefined;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);



export function AuthProvider( { children }: AuthProviderProps ) {
  const [userSession, setUserSession] = useState<AuthResponse>()

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUserSession(JSON.parse(storagedUser));
    }
  }, []);

  


  async function Login({email, password}: AuthRequest) {

    const response = await api.post("/session", {
      email,
      password
    })

    setUserSession(response.data)

    localStorage.setItem('@App:user', JSON.stringify(response.data))
    localStorage.setItem('@App:token', response.data.token)

  }

  return (
    <AuthContext.Provider value={{Login, userSession}}>
      {children}
    </AuthContext.Provider>
  );
};
