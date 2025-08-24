import { useTranslation } from 'react-i18next';
import Center from './Center';

const Loading = () => {
  const { t } = useTranslation();

  return <Center>{t('common.loading')}</Center>;
};

export default Loading;
