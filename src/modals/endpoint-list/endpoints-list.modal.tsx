import { Text, VStack } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { PaginationLimits } from '../../consts';
import { GET_ENDPOINTS, TEndpoint } from '../../domains/endpoints';
import { CreateEntityButton, EntityListDrawer } from '../../elements';
import { useGetPaginatedItems } from '../../hooks';
import EndpointRow from './endpoint-row.component';

type TEndpontsList = {
  isOpen: boolean;
  selectedEndpoints: TEndpoint[];
  setSelectedEndpoints: Dispatch<SetStateAction<TEndpoint[]>>;
  addedEndpoints: TEndpoint[];
  setAddedEndpoints: Dispatch<SetStateAction<TEndpoint[]>>;
  onClose: () => void;
};

function EndpontsList({
  isOpen,
  selectedEndpoints,
  onClose,
  setSelectedEndpoints,
  addedEndpoints,
  setAddedEndpoints,
}: TEndpontsList) {
  const { t } = useTranslation('pages');
  const {
    items: endpoints,
    pagination,
    totalCount,
    loading,
  } = useGetPaginatedItems<TEndpoint>(GET_ENDPOINTS, {
    limit: PaginationLimits.ENDPOINTS,
    filter: '{}',
    order: null,
    useUrl: false,
  });

  return (
    <EntityListDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={t('Settings.Triggers.EndpointsLabel')}
      emptyListElement={
        <VStack>
          <Text
            opacity={0.48}
            pl={4}
            pr={4}
            py={2}
            fontSize="md"
            w="full"
            textAlign="center"
          >
            {t('Settings.Endpoints.NoItems')}
          </Text>
          <CreateEntityButton
            text={t('components:Header.CreateButton.Endpoint')}
            entityTitle="endpoint"
          />
        </VStack>
      }
      templateColumns="max-content auto minmax(128px, 1fr)"
      allItemsSide={endpoints?.map((endpoint) => (
        <EndpointRow
          key={endpoint.id}
          endpoint={endpoint}
          isChecked={selectedEndpoints.some((item) => item.id === endpoint.id)}
          setSelectedItems={setSelectedEndpoints}
        />
      ))}
      selectedItemsSide={selectedEndpoints.map((endpoint) => (
        <EndpointRow
          key={`${endpoint.id}checked`}
          endpoint={endpoint}
          isChecked
          setSelectedItems={setSelectedEndpoints}
        />
      ))}
      loading={loading}
      totalCount={totalCount}
      pagination={pagination}
      handleSelectItems={setSelectedEndpoints}
      hasSelectedItems={!!selectedEndpoints.length}
      items={endpoints ?? []}
      selectedItems={selectedEndpoints}
      headerTitles={[
        'Settings.Endpoints.Type.Title',
        'Settings.Endpoints.Type.Destination',
      ]}
      addedItems={addedEndpoints}
      setAddedItems={setAddedEndpoints}
    />
  );
}

export default EndpontsList;
