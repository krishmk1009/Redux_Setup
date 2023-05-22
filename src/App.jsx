import { useState } from 'react'
import Store from './component/Store'
import Navbar from './component/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />


      <Store />

    </>
  )
}

export default App
