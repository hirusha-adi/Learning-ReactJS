import { useState } from 'react';

const TaskList = (props) => {

    const [show, setShow] = useState(true);
    const [tasks, setTasks] = useState([
        { id: 1, name: "hirusha", completed: true },
        { id: 2, name: "chamod", completed: false },
        { id: 3, name: "adikari", completed: true },
    ]);


    function handleDelete(taskId) {
        console.log(`Deleting: ${taskId}`);
        setTasks(tasks.filter(task => taskId !== task.id))
    }
    return (
        <>
            <h3>{props.pgTitle}</h3>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
            <ul>
                {show && tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.id} - {task.name} - {task.completed ? "Completed" : "Not Completed"}</span>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export { TaskList }
