import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './signup';
import Login from './Login';
import Home from './Home';
import { Navigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
   <Route path='/register' element={<Signup/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Home' element={<Home/>}/>
   </Routes>
   </BrowserRouter>

  )
}

export default App
