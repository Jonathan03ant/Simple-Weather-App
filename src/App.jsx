import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=13915fa1b194caeb1e9ae2f1ebd470a5`

  return (
    <>
        <div className='container flex flex-col justify-between items-center h-screen  '>
            <div className='top mt-20'>
                <div> 
                    <p className=' text-4xl font-bold'> Toronto </p>
                </div>
                <div>
                    <h2 className='text-7xl'> 20°F </h2>
                </div>

            </div>

            <div className='bottom mb-20 flex space-x-10'>
                <div> 
                    <h3> 33.3%°F </h3>
                </div>
                <div>
                    <h3> 70%°F </h3>
                </div>

                <div>
                    <h3> 1.99 MPH</h3>
                </div>
            </div>

            <div className=' mx-10 absolute right-0 top-1/2 transform -translate-y-1/2 -rotate-90'>
                <p> Cloudy </p>
            </div>

        </div>
      
    </>
  )
}

export default App
