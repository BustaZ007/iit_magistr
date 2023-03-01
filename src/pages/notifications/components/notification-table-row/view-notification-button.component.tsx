import { Button, ResponsiveValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useViewNotification } from '../../../../domains/notification';

type TViewNotificationButton = {
  notificationId: string;
  size?: ResponsiveValue<'sm' | 'md' | 'lg' | (string & object) | 'xs'>;
};

function ViewNotificationButton({
  notificationId,
  size = 'sm',
}: TViewNotificationButton): JSX.Element {
  const { t } = useTranslation('pages');
  const { viewNotification } = useViewNotification();

  return (
    <Button
      size={size}
      onClick={() => {
        viewNotification(notificationId);
      }}
    >
      {t('Notifications.MarkAsRead')}
    </Button>
  );
}

export default ViewNotificationButton;
