
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Signin} from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blog } from './pages/Blog'


function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/blog/:id' element={<Blog/>}></Route>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
