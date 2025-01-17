import { useTranslations } from 'next-intl';

import { Heading, Text } from '@/components/shared';
import { Link } from '@/i18n/routing';

const NotFoundScreen = () => {
  const t = useTranslations('NotFound');

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 text-white"
      style={{ height: '100vh' }}
    >
      <Heading level={1}>{t('title')}</Heading>
      <Text type="2xl">{t('description')}</Text>
      <div>
        <Link href="/">
          <Text type="lg">{t('backToHome')} ⭷</Text>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;
