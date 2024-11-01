import { useState } from 'react';
import { TaskCard } from './TaskCard.jsx';
import { BoxCard } from './BoxCard.jsx';

const TaskList = ({ tasks, setTasks }) => {

    const [show, setShow] = useState(true);



    function handleDelete(taskId) {
        console.log(`Deleting: ${taskId}`);
        setTasks(tasks.filter(task => taskId !== task.id))
    }
    return (
        <>
            <h3>Tasks</h3>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
            <ul>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                ))}
            </ul>
            <BoxCard>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, beatae!</p>
            </BoxCard>


        </>
    )
}

export { TaskList }
