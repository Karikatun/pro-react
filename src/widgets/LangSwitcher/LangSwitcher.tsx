import { useTranslation } from 'react-i18next';

import { Button, ThemeButton } from 'shared/ui';
import { classNames } from 'shared/lib';

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={ThemeButton.CLEAR}
            onClick={toggleLang}
            className={classNames('', {}, [className])}>
      {t('language')}
    </Button>
  );
};
