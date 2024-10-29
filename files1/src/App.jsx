import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx'
import { TaskList } from './components/TaskList.jsx';

function App() {



    return (
        <>
            <Header />
            <TaskList pgTitle="Page Name" />
            <Footer />
        </>
    )
}

export default App
