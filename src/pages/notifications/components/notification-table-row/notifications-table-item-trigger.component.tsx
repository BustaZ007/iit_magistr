import { HStack, Icon, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { EnvelopeSimple, Monitor, ShareNetwork } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { TEndpointStatus } from '../../../../domains/notification';

const EndpointValues = [
  { name: 'Email', icon: EnvelopeSimple },
  { name: 'Webhook', icon: ShareNetwork },
  { name: 'WebInterface', icon: Monitor },
];

type TNotificationsTableItemTrigger = {
  endpointStatuses: TEndpointStatus[];
};

function NotificationsTableItemTrigger({
  endpointStatuses,
}: TNotificationsTableItemTrigger) {
  const color = useColorModeValue('black', 'white');
  const { t } = useTranslation('pages');

  return (
    <HStack spacing={2}>
      {endpointStatuses.map(({ endpoint, status }) => (
        <Tooltip
          label={
            t(`Notifications.Endpoints.Type.${endpoint.type}`) +
            t(`Notifications.Endpoints.Status.${status}`)
          }
          key={endpoint.type}
        >
          <Icon
            as={
              EndpointValues.find((item) => endpoint.type === item.name)?.icon
            }
            h={5}
            w={5}
            color={status === 'success' ? color : 'red.500'}
          />
        </Tooltip>
      ))}
    </HStack>
  );
}

export default NotificationsTableItemTrigger;
