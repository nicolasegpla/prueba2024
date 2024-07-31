import { useRoutes, BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from '../../Context/GlobalState'
import MainMenu from '../MainMenu'
import TestingPage from '../TestingPage'
import NotFound from '../NotFound'
import './App.scss'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <MainMenu /> },
    { path: '/main-menu', element: <MainMenu /> },
    { path: '/testing', element: <TestingPage /> },
    { path: '/*', element: <NotFound /> },
    
    
  ])

  return routes
}

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
