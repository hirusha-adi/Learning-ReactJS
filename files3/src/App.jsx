import { useState } from 'react';
import './App.css'
import { BodyContent } from './components/BodyContent'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { ShowTasks } from './components/ShowTasks'

function App() {
    const [tasksList, setTasksList] = useState([])
    const [task, setTask] = useState([])

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
