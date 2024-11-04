import './App.css'
import { BodyContent } from './components/BodyContent'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { ShowTasks } from './components/ShowTasks'

function App() {

    return (
        <>  
            <Header />
            <BodyContent>
                <AddTask />
                <ShowTasks />
            </BodyContent>
        </>
    )
}

export default App
