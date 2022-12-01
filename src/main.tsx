import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={ theme }>
    <GlobalStyle />
    <App />
  </ThemeProvider>
)
