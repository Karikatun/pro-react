import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <div>{t('mainPage.title')}</div>
  );
};

export default MainPage;
