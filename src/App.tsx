import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import CounterWithClassComponent from './components/CounterWithClassComponent';
import CounterWithFuncComponent from './components/CounterWithFuncComponent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ padding: '40px', border: '2px solid purple ', margin: '20px' }}>


      {count}
      {/* <CounterWithClassComponent count={count} setCount={setCount}></CounterWithClassComponent> */}
      <CounterWithFuncComponent count={count} setCount={setCount}></CounterWithFuncComponent>
    </div>
  );
}

export default App
