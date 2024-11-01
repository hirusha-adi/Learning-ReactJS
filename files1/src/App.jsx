import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx'
import { TaskList } from './components/TaskList.jsx';
import { InputForm } from './components/InputForm.jsx';

function App() {
    return (
        <>
            <Header />
            <TaskList pgTitle="ToDo Tasks" />
            <InputForm />
            <Footer />
        </>
    )
}

export default App
