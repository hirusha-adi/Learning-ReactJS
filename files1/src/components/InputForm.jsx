import { useState } from "react"


const InputForm = ({ tasks, setTasks }) => {

    const [taskValue, setTaskValue] = useState("");
    const [progress, setProgress] = useState(false);

    const handleChange = (event) => {
        setTaskValue(event.target.value)
    }

    const handleReset = () => {
        setTaskValue("")
        setProgress(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000000),
            name: taskValue,
            completed: Boolean(progress)
        }
        console.log(task);
        setTasks([...tasks, task])  // NOTE THIS PART! ...tasks, task
        handleReset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} placeholder="task name" autoComplete="off" value={taskValue} />

                <select value={progress} onChange={(event) => setProgress(event.target.value)}>
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>

                <button type="submit">Add Task</button>
                <button type="button" onClick={handleReset} className="reset">Reset</button>
            </form>
            <p>{taskValue}</p>
        </>
    )
}

export { InputForm }
