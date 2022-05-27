import "./CardStyle.scss"


interface Task {
    name: string;
    status: string;
    data: string;
}


export default function CardTask({name, data, status}: Task): JSX.Element{



    return (
        <div className="card">
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