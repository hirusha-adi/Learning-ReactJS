import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx'
import { TaskList } from './components/TaskList.jsx';
import { InputForm } from './components/InputForm.jsx';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, name: "hirusha", completed: true },
        { id: 2, name: "chamod", completed: false },
        { id: 3, name: "adikari", completed: true },
    ]);

    return (
        <>
            <Header />
            <TaskList tasks={tasks} setTasks={setTasks} />
            <InputForm tasks={tasks} setTasks={setTasks} />
            <Footer />
        </>
    )
}

export default App
