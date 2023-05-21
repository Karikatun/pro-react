import { Route, Routes } from 'react-router-dom'

import './styles/index.scss'
import { NavLink } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const AboutPage = lazy(() => import('./pages/about/AboutPage'))
const MainPage = lazy(() => import('./pages/main/MainPage'))

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
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