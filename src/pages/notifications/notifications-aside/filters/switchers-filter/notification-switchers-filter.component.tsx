import { Box, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FilterSwitcher } from '../../../../../elements';

const checkboxesData = [
  {
    id: 'isActiveNotification',
    label: 'Notifications.Aside.Filters.Active',
  },
  {
    id: 'isSentNotification',
    label: 'Notifications.Aside.Filters.Sent',
  },
];

function NotificationSwitchersFilter(): JSX.Element {
  const { t } = useTranslation('pages');

  return (
    <Box w="full">
      <VStack align="flex-start" w="full" spacing={3}>
        {checkboxesData.map((item) => (
          <FilterSwitcher key={item.id} id={item.id} label={t(item.label)} />
        ))}
      </VStack>
    </Box>
  );
}

export default NotificationSwitchersFilter;
