import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
