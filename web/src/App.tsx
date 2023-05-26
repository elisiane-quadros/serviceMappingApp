
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme'
import {BrowserRouter,Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'


function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/> 
          <Route path="/new" element={<h1>Olá</h1>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
