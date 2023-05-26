import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export const Router = () => {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/new" element={<h1>Olá</h1>}/>
    </Routes>
  )
}