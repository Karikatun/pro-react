import { useTheme } from 'app/providers/ThemeProvider';

import { ThemeIcon } from 'shared/assets/icons';
import { classNames } from 'shared/lib'
import { Button, ThemeButton } from 'shared/ui';

import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className])}>
      <ThemeIcon className={classNames(cls[theme], {}, [])} />
    </Button>
  )
}
