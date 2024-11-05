import { useState, useEffect } from 'react';
import { BodyContent } from './components/BodyContent'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { ShowTasks } from './components/ShowTasks'
import './App.css'

function App() {
    const [tasksList, setTasksList] = useState(JSON.parse(localStorage.getItem("tasklist")) || [])
    const [task, setTask] = useState([])

    // to keep track of tasks in local storage
    // and update stuff accordingly
    useEffect(() => {
        localStorage.setItem("tasklist", JSON.stringify(tasksList))
    }, [tasksList])

    return (
        <>
            <Header />
            <BodyContent>
                <AddTask
                    tasksList={tasksList}
                    setTasksList={setTasksList}
                    task={task}
                    setTask={setTask}
                />
                <ShowTasks
                    tasksList={tasksList}
                    setTasksList={setTasksList}
                    task={task}
                    setTask={setTask}
                />
            </BodyContent>
        </>
    )
}

export default App
