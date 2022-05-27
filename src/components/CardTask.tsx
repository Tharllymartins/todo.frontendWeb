import { ReactNode, useContext, useEffect, useState } from "react";
import { AuthContext, AuthProvider, AuthResponse } from "../context/auth";
import { api } from "../service/api";
import "../styles/card-task.scss"
import Pencil from "../assets/icons/pencil-edit.svg"


interface Task {
    id: string;
    name: string;
    status: string;
}

interface resume {
    count: string | undefined;
    title: string | undefined;
}

 
function CardTask ( {count, title}: resume) {
    const context = useContext(AuthContext)
    const user  = context.userSession?.user
    const storagedToken = localStorage.getItem('@App:token');

    const [tasks, setTasks] = useState<Task[]>([])
    const [clicked, setClick] = useState<boolean>(false)

    function handleCLick(){
        setClick(!clicked);
    }


    useEffect(() => {
        api.get("/todo", {
            headers: {
                'Authorization': `Bearer ${storagedToken}`
              },
        }).then(response => setTasks(response.data.tasks))
    }, [])


    return(
        <div
            onClick={handleCLick}
            className={`card-task  ${clicked ? "clicked" : ""}`}
        >
            <div className="img-card">
                <span>
                    <img src={Pencil} alt="img" />
                </span>
            </div>
            <div className="content">
                <h3 className="count-task">
                    {count}
                </h3>

                <span>
                    <p className="task-name">{title}</p>
                </span>
            </div>
        </div>
    );
}

export default CardTask;

