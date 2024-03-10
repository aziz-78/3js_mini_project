import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Home,About,Projects, Contact} from './pages/index'

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Contact" element={<Contact/> }/>
            <Route path="/projects" element={<Projects/>} />

        </Routes>
      </Router>
    </main>
  )
}

export default App
