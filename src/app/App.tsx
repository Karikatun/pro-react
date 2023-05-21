import { NavLink } from 'react-router-dom'

import { AppRouter } from 'app/providers/router'
import { useTheme } from 'app/providers/ThemeProvider'

import { classNames } from 'shared/lib'

import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <NavLink to='/'>Главная</NavLink>
      <NavLink to='/about'>О сайте</NavLink>

      <AppRouter />
    </div>
  )
}

export default App;
