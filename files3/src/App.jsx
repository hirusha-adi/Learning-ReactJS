import { useState } from 'react';
import './App.css'
import { BodyContent } from './components/BodyContent'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { ShowTasks } from './components/ShowTasks'

function App() {
    const [tasksList, setTasksList] = useState([])

    return (
        <>
            <Header />
            <BodyContent>
                <AddTask tasksList={tasksList} setTasksList={setTasksList} />
                <ShowTasks tasksList={tasksList} setTasksList={setTasksList} />
            </BodyContent>
        </>
    )
}

export default App
