import {  useContext, useEffect, useState } from "react";
import FilterTask from "../components/filter-task";
import { AuthContext } from "../context/auth";
import { api } from "../service/api";
import "../styles/resume-of-tasks.scss"
import ImgUser from '../assets/icons/me.svg'
import CardTask from "../components/CardTask/CardTask"
import "../styles/home.scss"

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
    }, [] )


    return(
        <div className="page-task">
            <aside>
                <nav>
                    <li className="active"><a href="#" >Home</a></li>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Settings</a></li>
                </nav>
            </aside>

            <div className="main-container">
            <input 
                type="text" 
                name="" 
                className="inp-search"
                placeholder="Pesquisar" 
                />
                <div className="container-01">
                 <h1>Seja Bem vindo, <span>{user?.name}</span>!</h1>

                  <div className="resume-tasks">
                   <FilterTask count={resume?.todo} title={"To do"} />
                   <FilterTask count={resume?.doing} title={"Doing"} />
                   <FilterTask count={resume?.done} title={"Done"} />
                  </div>
                 </div>

                 <div className="list-tasks">
                    {tasks.map( (task) => 
                        <CardTask name={task.name} status={task.status} />
                    )}
                </div>
            </div>

            <div className="calender">
                <div className="info-user">
                    <div>
                     <label ><img src={ImgUser} alt="" /></label> 
                     <div className="info-name">
                     <h4>{user?.name}</h4>
                     <p>Plano free</p>
                     </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Home;

