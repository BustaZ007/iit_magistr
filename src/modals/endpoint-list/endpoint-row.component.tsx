import { tryParseJSON } from '@3divi/shared-components';
import { Checkbox, Text } from '@chakra-ui/react';
import { SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { TEndpoint, TEndpointMeta } from '../../domains/endpoints';
import { TableRow } from '../../elements/table';
import { EndpointsTableTrigger } from '../../pages/settings/endpoints-settings/components';

type TEndpointRow = {
  endpoint: TEndpoint;
  setSelectedItems: (value: SetStateAction<TEndpoint[]>) => void;
  isChecked: boolean;
};

function EndpointRow({ endpoint, setSelectedItems, isChecked }: TEndpointRow) {
  const { t } = useTranslation('pages');
  const endpointMeta = tryParseJSON<TEndpointMeta>(endpoint.meta);

  const handleRemoveEndpoint = () => {
    setSelectedItems((prevState) =>
      prevState.filter((item) => item.id !== endpoint.id)
    );
  };
  const handleControlChange = () => {
    if (!isChecked) {
      setSelectedItems((prevState) => [...prevState, endpoint]);
      return;
    }
    handleRemoveEndpoint();
  };

  return (
    <TableRow onClick={handleControlChange} pt={2} pb={2}>
      <Checkbox isChecked={isChecked} pointerEvents="none" />
      <EndpointsTableTrigger type={endpoint.type} />
      <Text noOfLines={1} wordBreak="break-all">
        {endpoint.type === 'WebInterface' &&
          t('Settings.Endpoints.Type.WebInterface')}
        {endpoint.type === 'Email' && endpointMeta?.target_email}
        {endpoint.type === 'Webhook' &&
          `${endpointMeta?.url ?? ''} (${endpointMeta?.method ?? ''})`}
      </Text>
    </TableRow>
  );
}

export default EndpointRow;
