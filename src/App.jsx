import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Background from './components/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Background />
        <Card />
      </div>
    </>
  )
}

export default App
