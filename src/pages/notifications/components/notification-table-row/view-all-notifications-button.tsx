import {
  Button,
  Icon,
  ResponsiveValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import { CheckCircle } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useViewAllNotifications } from '../../../../domains/notification';

type TViewAllNotificationsButton = {
  size?: ResponsiveValue<'sm' | 'md' | 'lg' | (string & object) | 'xs'>;
};

function ViewAllNotificationsButton({
  size = 'sm',
}: TViewAllNotificationsButton): JSX.Element {
  const { viewAllNotifications } = useViewAllNotifications();
  const { t } = useTranslation('components');
  const pr = useBreakpointValue({ base: '0', md: '4' }) ?? '4';

  const handleButtonClick = () => {
    viewAllNotifications();
  };

  return (
    <Button
      colorScheme="blue"
      fontWeight="normal"
      leftIcon={<Icon as={CheckCircle} w="6" h="6" />}
      pl="2"
      pr={pr}
      onClick={handleButtonClick}
      id="mark-all-as-read-button"
      size={size}
    >
      {t('Notifications.MarkAllButton')}
    </Button>
  );
}

export default ViewAllNotificationsButton;
