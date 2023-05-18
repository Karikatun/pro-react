import { Route, Routes } from 'react-router-dom'

import './index.scss'
import { NavLink } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const AboutPage = lazy(() => import('./pages/about/AboutPage'))
const MainPage = lazy(() => import('./pages/main/MainPage'))

const App = () => {
  return (
    <div className='app'>
      <NavLink to='/'>Главная</NavLink>
      <NavLink to='/about'>О сайте</NavLink>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App