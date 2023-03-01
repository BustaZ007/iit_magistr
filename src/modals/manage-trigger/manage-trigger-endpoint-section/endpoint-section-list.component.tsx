import { Box } from '@chakra-ui/react';
import { useCallback } from 'react';
import { TEndpoint } from '../../../domains/endpoints';
import EndpointSectionItem from './endpoint-section-item.component';
import { useUpdateTrigger } from '../../../domains/triggers';

type TEndpointSectionList = {
  triggersEndpoints: TEndpoint[];
  triggerId: string;
};

function EndpointSectionList({
  triggersEndpoints,
  triggerId,
}: TEndpointSectionList) {
  const { updateTrigger, loading } = useUpdateTrigger(triggerId);
  const handleRemoveEndpoint = useCallback(
    (endpointId: string) => {
      updateTrigger(undefined, [
        ...triggersEndpoints
          .map((endpoint) => endpoint.id)
          .filter((id) => id !== endpointId),
      ]);
    },
    [updateTrigger, triggersEndpoints]
  );
  return (
    <Box pb={1} px={6} overflowY="auto">
      {triggersEndpoints.map((endpoint) => (
        <EndpointSectionItem
          key={endpoint.id}
          endpointId={endpoint.id}
          meta={endpoint.meta}
          type={endpoint.type}
          handleRemoveEndpoint={handleRemoveEndpoint}
          loading={loading}
        />
      ))}
    </Box>
  );
}

export default EndpointSectionList;
