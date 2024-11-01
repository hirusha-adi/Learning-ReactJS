import { useState } from "react"


const InputForm = () => {

    const [taskValue, setTaskValue] = useState("");

    const handleChange = (event) => {
        setTaskValue(event.target.value)
    }

    const handleReset = () => {
        setTaskValue("")
    }

    return (
        <>
            <form>
                <input type="text" onChange={handleChange} placeholder="task name" autoComplete="off" value={taskValue} />
                <button type="submit">Add Task</button>
                <span onClick={handleReset} className="reset">Reset</span>
            </form>
            <p>{taskValue}</p>
        </>
    )
}

export { InputForm }
