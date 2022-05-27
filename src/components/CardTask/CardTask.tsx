import { useState } from "react";
import "./CardStyle.scss"


interface Task {
    name: string;
    status: string;
    data: string;
}


export default function CardTask({name, data, status}: Task): JSX.Element{

    const [clicked, setClick] = useState<boolean>(false)
    
    function handleCLick(){
        setClick(!clicked);
    }

    return (
        <div 
        onClick={handleCLick}
        className={`card  ${clicked ? "clickedd" : ""}`}
        >
            <div className="title-card">
                <span>
                    {name}
                </span>
                <span className="span-status">{status}</span>
            </div>
            
            <div className="text-card">
                <p>Data: {(new Date(data)).toLocaleDateString('pt-br')} </p>
                <hr />
            </div>
            <h4>6 de 6 tarefas concluidas </h4>
        </div>
    )
}