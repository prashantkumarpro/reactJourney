import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if (count === 20) return false;
    setCount(count + 1)
  }

  const removeValue = () => {
    if (count === 0) return false;
    setCount(count - 1)
  }
  return (
    <>


      <div className="card">
        <button onClick={addValue}>+
        </button>
        <p>count is {count}</p>
      </div>
      <div className="card">
        <button onClick={removeValue}>-
        </button>
        <p>count is {count}</p>
      </div>

    </>
  )
}

export default App;
