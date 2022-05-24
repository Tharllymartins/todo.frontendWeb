import { ReactNode, useContext, useEffect, useState } from "react";
import CardTask from "../components/CardTask";
import { AuthContext } from "../context/auth";
import { api } from "../service/api";
import "../styles/resume-of-tasks.scss"


interface Task {
    id: string;
    name: string;
    status: string;
}

interface Resume {
    todo: string;
    doing: string;
    done: string;
}

 
function Home () {
    const context = useContext(AuthContext)
    const user  = context.userSession?.user
    const storagedToken = localStorage.getItem('@App:token');

    const [tasks, setTasks] = useState<Task[]>([])
    const [resume, setResume] =useState<Resume>()


    useEffect(() => {
        api.get("/todo", {
            headers: {
                'Authorization': `Bearer ${storagedToken}`
              },
        }).then(response => {
            setTasks(response.data.tasks)
            setResume(response.data.resume)
        })
    }, [])


    return(
        <div className="resume-of-tasks">
            <CardTask count={resume?.todo} title={"To do"} />
            <CardTask count={resume?.doing} title={"Doing"} />
            <CardTask count={resume?.done} title={"Done"} />
        </div>
    );
}

export default Home;

