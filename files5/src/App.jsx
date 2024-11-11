import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <main>
          <Hero />
          <Cards />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
