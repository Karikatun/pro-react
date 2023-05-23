import { FC } from 'react';

import { NavLink, NavLinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends NavLinkProps {
  className?: string,
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, to, children, theme = AppLinkTheme.SECONDARY, ...otherProps } = props;

  console.log(cls[theme])

  return (
    <NavLink to={to} 
             className={classNames(cls.AppLink, {}, [className, cls[theme]])} 
             {...otherProps}>
      {children}
    </NavLink>
  )
}
