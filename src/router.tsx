import { RouteObject, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Serivce'
import Work from './pages/Work'
import Contact from './pages/Contact'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/about',
    element: <About />,
  },

  {
    path: '/service',
    element: <Service />,
  },

  {
    path: '/work',
    element: <Work />,
  },

  {
    path: '/contact',
    element: <Contact />,
  },
]

export default createBrowserRouter(routes)