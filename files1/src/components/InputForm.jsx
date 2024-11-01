import { useState, useRef } from "react"


const InputForm = ({ tasks, setTasks }) => {

    const [progress, setProgress] = useState(false);

    // const [taskValue, setTaskValue] = useState("");
    const taskRef = useRef("");

    // const handleChange = (event) => {
    //     // setTaskValue(event.target.value)
    //     // since no value to set, we dont need this function at all
    //     console.log(taskRef.current.value)
    // }

    const handleReset = () => {
        // setTaskValue("")
        taskRef.current.value = "";
        setProgress(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task = {
            id: Math.floor(Math.random() * 10000000),
            // name: taskValue,
            name: taskRef.current.value,
            completed: Boolean(progress)
        }
        console.log(task);
        setTasks([...tasks, task])  // NOTE THIS PART! ...tasks, task
        handleReset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" onChange={handleChange} placeholder="task name" autoComplete="off" value={taskValue} /> */}
                <input type="text" ref={taskRef} placeholder="task name" autoComplete="off" />

                <select value={progress} onChange={(event) => setProgress(event.target.value)}>
                    <option value={false}>Pending</option>
                    <option value={true}>Completed</option>
                </select>

                <button type="submit">Add Task</button>
                <button type="button" onClick={handleReset} className="reset">Reset</button>
            </form>

            {/* Rendering doesn't work with useRef */}
            {/* <p>{taskRef.current.value}</p> */}
        </>
    )
}

export { InputForm }
