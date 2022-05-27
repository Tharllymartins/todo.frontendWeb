import "./CardStyle.scss"


interface Task {
    name: string;
    status: string;
}


export default function CardTask({name, status}: Task): JSX.Element{
    return (
        <div className="card">
            <div className="title-card">
                <span>
                    {name}
                </span>
            </div>

            <div className="">
                <span>
                    {status}
                </span>
            </div>
        </div>
    )
}