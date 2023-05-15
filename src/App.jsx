import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import Coffecard from './Componet/Coffecard/Coffecard'

function App() {
  const loders = useLoaderData()
  console.log(loders)

  return (
    <div className=''>
      <h1>number of {loders.length}</h1>
      
      {
        loders.map(loder => <Coffecard
        loder={loder}
        ></Coffecard>)
      }
    </div>
  )
}

export default App
