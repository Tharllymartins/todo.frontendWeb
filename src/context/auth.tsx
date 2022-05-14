import React, { createContext, ReactNode } from 'react';



type user = { 
    children? : ReactNode;
}

const AuthContext = createContext({});

export const AuthProvider: React.FC = ({ children }: user) => {
 return (
   <AuthContext.Provider value={{ signed: true }}>
     {children}
   </AuthContext.Provider>
 );
};

export default AuthContext;