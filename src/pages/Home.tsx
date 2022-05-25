import { ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { api } from "../service/api";


interface Task {
    id: string;
    name: string;
    status: string;
}

 
function Home () {
    const storagedUser = localStorage.getItem('@App:user') ;
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
        <div className="home-page">
            <div className="nav-container">
                <nav>
                    <li>home</li>
                    <li>home</li>
                </nav>
            </div>
            <div className="main-container">
                
            </div>
        </div>
    );
}

export default Home;

