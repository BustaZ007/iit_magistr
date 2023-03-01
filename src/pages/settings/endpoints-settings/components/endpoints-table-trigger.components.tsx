import { Icon, Tooltip } from '@chakra-ui/react';
import { EnvelopeSimple, Monitor, ShareNetwork } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

const EndpointValues = [
  { name: 'Email', icon: EnvelopeSimple },
  { name: 'Webhook', icon: ShareNetwork },
  { name: 'WebInterface', icon: Monitor },
];

type TEndpointsTableTrigger = {
  type: string;
};

function EndpointsTableTrigger({ type }: TEndpointsTableTrigger) {
  const { t } = useTranslation('pages');

  return (
    <Tooltip label={t(`Settings.Endpoints.Type.${type}`)}>
      <Icon
        as={EndpointValues.find((item) => type === item.name)?.icon}
        h={5}
        w={5}
      />
    </Tooltip>
  );
}

export default EndpointsTableTrigger;
