import { useState } from 'react'
import Store from './component/Store'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>MY store</h1>
     <button>Total Product : 2000</button>

     <Store />

      </>
      )
}

      export default App
