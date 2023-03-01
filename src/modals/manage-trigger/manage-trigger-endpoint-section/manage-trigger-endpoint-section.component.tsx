import { Box, Divider, Text } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TTrigger, useUpdateTrigger } from '../../../domains/triggers';
import EndpointSectionHeader from './endpoint-section-header.component';
import { TEndpoint, useGetEndpoints } from '../../../domains/endpoints';
import EndpointSectionList from './endpoint-section-list.component';

type TProfileCardGroupsSection = {
  trigger: TTrigger;
};

function ManageTriggerEndpointSection({ trigger }: TProfileCardGroupsSection) {
  const { t } = useTranslation('components');
  const { updateTrigger, loading } = useUpdateTrigger(trigger.id);
  const { endpoints } = useGetEndpoints();
  const triggersEndpoints = trigger.endpoints;
  const handleAddEndpoint = useCallback(
    (newEndpoint: TEndpoint) => {
      updateTrigger(undefined, [
        ...triggersEndpoints.map((endpoint) => endpoint.id),
        newEndpoint.id,
      ]);
    },
    [updateTrigger, trigger]
  );
  const menuEndpoints = useMemo(
    () =>
      endpoints
        ? [
            ...endpoints.filter(
              (endpoint) =>
                !triggersEndpoints.map((end) => end.id).includes(endpoint.id)
            ),
          ]
        : [],
    [trigger, endpoints]
  );
  return (
    <>
      <EndpointSectionHeader
        handleAddEndpoint={handleAddEndpoint}
        loading={loading}
        menuEndpoints={menuEndpoints}
      />
      {triggersEndpoints.length !== 0 || loading ? (
        <EndpointSectionList
          triggersEndpoints={triggersEndpoints}
          triggerId={trigger.id}
        />
      ) : (
        <Box textAlign="center" p={4}>
          <Text wordBreak="break-word" opacity={0.48} fontSize="sm">
            {t('Modal.ManageTrigger.Endpoints.NoEndpoints')}
          </Text>
        </Box>
      )}
      <Divider />
    </>
  );
}

export default ManageTriggerEndpointSection;
