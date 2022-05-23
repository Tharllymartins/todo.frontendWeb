import { ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext, AuthProvider, AuthResponse } from "../context/auth";
import { api } from "../service/api";


interface Task {
    id: string;
    name: string;
    status: string;
}

 
function Home () {
    const context = useContext(AuthContext)
    const user  = context.userSession?.user
    const storagedToken = localStorage.getItem('@App:token');

    const [tasks, setTasks] = useState<Task[]>([])


    useEffect(() => {
        api.get("/todo", {
            headers: {
                'Authorization': `Bearer ${storagedToken}`
              },
        }).then(response => setTasks(response.data.tasks))
    }, [])


    return(
        <div>
            <>
               <h1>Seja bem vindo {user?.name} </h1> 
            </>
        </div>
    );
}

export default Home;

