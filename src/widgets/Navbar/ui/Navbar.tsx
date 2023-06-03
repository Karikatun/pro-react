import { AppLink } from 'shared/ui';
import { classNames } from 'shared/lib';

import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation('navbar');

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to='/'>{t('main')}</AppLink>
        <AppLink to='/about'>{t('about')}</AppLink>
      </div>
    </div>
  );
};
