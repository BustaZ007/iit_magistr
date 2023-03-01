import { tryParseJSON } from '@3divi/shared-components';
import { Text } from '@chakra-ui/react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { TEndpoint, TEndpointMeta } from '../../../../domains/endpoints';
import { ManageEndpointModal } from '../../../../modals';
import { TableRow } from '../../../../elements/table';
import { EndpointsTableTrigger } from '.';

type TEndpointTableRow = {
  endpoint: TEndpoint;
};

function EndpointTableRow({ endpoint }: TEndpointTableRow) {
  const { t } = useTranslation('pages');
  const endpointMeta = tryParseJSON<TEndpointMeta>(endpoint.meta)!;
  const getModals = (isOpen: boolean, onClose: () => void) =>
    isOpen ? (
      <ManageEndpointModal
        isOpen={isOpen}
        onClose={onClose}
        creationDate={endpoint.creationDate}
        lastModified={endpoint.lastModified}
        endpointId={endpoint.id}
      />
    ) : undefined;
  return (
    <TableRow getModals={getModals}>
      <EndpointsTableTrigger type={endpoint.type} />
      <>
        {endpoint.type === 'WebInterface' &&
          t('Settings.Endpoints.Type.WebInterface')}
        {endpoint.type === 'Email' && endpointMeta.target_email}
        {endpoint.type === 'Webhook' &&
          `${endpointMeta.url!} (${endpointMeta.method!})`}
      </>
      <Text>
        {moment(endpoint.creationDate)
          .locale(window.navigator.language)
          .format('HH:mm · D MMMM')}
      </Text>
    </TableRow>
  );
}

export default EndpointTableRow;
