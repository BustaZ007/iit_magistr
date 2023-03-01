import { tryParseJSON } from '@3divi/shared-components';
import { Flex, IconButton, Text, useColorModeValue } from '@chakra-ui/react';
import { Trash } from 'phosphor-react';
import { SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { TEndpoint, TEndpointMeta } from '../../domains/endpoints';
import { EndpointsTableTrigger } from '../../pages/settings/endpoints-settings/components';

type TEndpointPreviewRow = {
  endpoint: TEndpoint;
  setSelectedItems: (value: SetStateAction<TEndpoint[]>) => void;
};

function EndpointPreviewRow({
  endpoint,
  setSelectedItems,
}: TEndpointPreviewRow) {
  const { t } = useTranslation('pages');
  const endpointMeta = tryParseJSON<TEndpointMeta>(endpoint.meta);
  const redColor = useColorModeValue('red.500', 'red.400');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const handleRemoveEndpoint = () => {
    setSelectedItems((prevState) =>
      prevState.filter((item) => item.id !== endpoint.id)
    );
  };

  return (
    <Flex
      py={3}
      borderBottom="1px"
      pl="4"
      borderColor={borderColor}
      alignItems="center"
      gap={3}
    >
      <IconButton
        size="sm"
        icon={<Trash size={20} />}
        aria-label="remove-group"
        variant="ghost"
        colorScheme="red"
        color={redColor}
        onClick={handleRemoveEndpoint}
      />

      <EndpointsTableTrigger type={endpoint.type} />
      <Text noOfLines={1} wordBreak="break-all">
        {endpoint.type === 'WebInterface' &&
          t('Settings.Endpoints.Type.WebInterface')}
        {endpoint.type === 'Email' && endpointMeta?.target_email}
        {endpoint.type === 'Webhook' &&
          `${endpointMeta?.url ?? ''} (${endpointMeta?.method ?? ''})`}
      </Text>
    </Flex>
  );
}

export default EndpointPreviewRow;
