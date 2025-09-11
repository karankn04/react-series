import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"chirag",
    age:22
  }

  return (

    <>
      <h1 className='bg-green-500 text-black'>Tailwind test</h1>
    <Card channel="chai aur code"  />
    <Card />

    </>
  )
}


export default App
