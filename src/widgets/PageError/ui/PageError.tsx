import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui';
import { classNames } from 'shared/lib';

import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('unexpectedError')}</p>
      <Button onClick={reloadPage}>
        {t('updatePage')}
      </Button>
    </div>
  );
};
