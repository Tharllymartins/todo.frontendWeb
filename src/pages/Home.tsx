import {  useContext, useEffect, useState } from "react";
import FilterTask from "../components/filter-task";
import { AuthContext } from "../context/auth";
import { api } from "../service/api";
import "../styles/resume-of-tasks.scss"
import ImgUser from '../assets/icons/me.svg'
import CardTask from "../components/CardTask/CardTask"
import "../styles/home.scss"
import HomeIcon from "../assets/icons/home.svg"


interface Task {
    id: string;
    name: string;
    created_at: string;
    status: string;
}

interface Resume {
    todo: number;
    doing: number;
    done: number;
    total: number;
}

 
function Home () {
    const context = useContext(AuthContext)
    const user  = context.userSession?.user
    const storagedToken = localStorage.getItem('@App:token');
    console.log(user?.name)

    const [tasks, setTasks] = useState<Task[]>([])
    const [overView, setoverView] =useState<Resume>()


    useEffect(() => {
        
        api.get("/task", {
            headers: {
                'Authorization': `Bearer ${storagedToken}`
              },
        }).then(response => {
            setTasks(response.data.tasks)
            setoverView(response.data.overView)
        })
        
    }, [] )


    return(
        <div className="page-task">
            <aside>
                <nav>
                    <li className="active"><a href="#" ><img src={HomeIcon}/>Home</a></li>
                    <li><a href="#"><img src={HomeIcon}/>Dashboard</a></li>
                    <li><a href="#"><img src={HomeIcon}/>Settings</a></li>
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
                   <FilterTask count={overView?.todo} title={"To do"} />
                   <FilterTask count={overView?.doing} title={"Doing"} />
                   <FilterTask count={overView?.done} title={"Done"} />
                   <FilterTask count={overView?.total} title={"Total"} />
                  </div>
                 </div>

                 <div className="container-02">
                     <h4>Minhas Tarefas</h4>
                     <button>+ Nova Tarefa</button>
                    
                 </div>

                 <div className="list-tasks">
                    {tasks.map( (task) => 
                        <CardTask key={task.id} name={task.name} data={task.created_at} status={task.status}  />
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



