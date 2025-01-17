import { BaseLayout } from '@/components/layouts';
import { routing } from '@/i18n/routing';
import { NotFoundScreen } from '@/screens';

const GlobalNotFound = () => {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundScreen />
    </BaseLayout>
  );
};

export default GlobalNotFound;
