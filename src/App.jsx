import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
    <div className="cont top-0 right-0">
    <Navbar/>
    </div>
    <div className='bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
     <Manager/>

    </div>
    <div className=' inset-x-0 bottom-0 h-16 ...'>
      <Footer/>
    </div>
    </>
  )
}

export default App
