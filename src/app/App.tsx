import { Suspense } from 'react'

import { NavLink, Route, Routes } from 'react-router-dom'

import { MainPage } from 'pages/main'
import { AboutPage } from 'pages/about'

import { classNames } from 'shared/lib/classNames/classNames'

import { useTheme } from 'app/providers/ThemeProvider'

import './styles/index.scss'

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