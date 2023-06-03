import { AppLink } from 'shared/ui';
import { classNames } from 'shared/lib';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink to='/'>Главная</AppLink>
      <AppLink to='/about'>О сайте</AppLink>
    </div>
  </div>
);
