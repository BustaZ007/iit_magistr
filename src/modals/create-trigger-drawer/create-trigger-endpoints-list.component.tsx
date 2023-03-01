import { useTranslation } from 'react-i18next';
import { Box, FormControl, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import EndpontsList from '../endpoint-list/endpoints-list.modal';
import { TEndpoint } from '../../domains/endpoints';
import EndpointPreviewRow from '../endpoint-list/endpoint-preview-row.component';
import { CreateOrAttachButtons, CustomFormLabel } from '../../elements';
import CreateEndpointModal from '../create-endpoint-drawer';

type TCreateTriggerGroupSelect = {
  handleChange: (id: string[]) => void;
};

function CreateTriggerEndpointsList({
  handleChange,
}: TCreateTriggerGroupSelect) {
  const { t } = useTranslation('pages');
  const { onOpen, onClose, isOpen } = useDisclosure();
  const {
    onOpen: onEndpointOpen,
    onClose: onEndpointClose,
    isOpen: isEndpointOpen,
  } = useDisclosure();
  const [addedEndpoints, setAddedEndpoints] = useState<TEndpoint[]>([]);
  const [selectedEndpoints, setSelectedEndpoints] =
    useState<TEndpoint[]>(addedEndpoints);

  useEffect(() => {
    handleChange(addedEndpoints.map((endpoint) => endpoint.id));
    setSelectedEndpoints(addedEndpoints);
  }, [addedEndpoints]);

  const handleCreateEndpoint = (endpoint: TEndpoint) => {
    setAddedEndpoints((prevState) => [...prevState, endpoint]);
  };

  return (
    <Box w="full">
      <FormControl display="flex" alignContent="flex-start">
        <Box py={2}>
          <CustomFormLabel label={t('Settings.Endpoints.Title')} />
        </Box>
        <Box w={400}>
          <CreateOrAttachButtons
            onOpen={onOpen}
            onCreateOpen={onEndpointOpen}
            createTitle={t('components:Header.CreateButton.Endpoint')}
          />
          {addedEndpoints.slice(0, 5).map((endpoint) => (
            <EndpointPreviewRow
              key={endpoint.id}
              endpoint={endpoint}
              setSelectedItems={setAddedEndpoints}
            />
          ))}
          {addedEndpoints.length > 5 && (
            <Text pl="2" pt="2" opacity={0.88}>
              {addedEndpoints.length - 5 === 1
                ? t('Settings.Triggers.MoreEndpointsOne', {
                    count: addedEndpoints.length - 5,
                  })
                : t('Settings.Triggers.MoreEndpoints', {
                    count: addedEndpoints.length - 5,
                  })}
            </Text>
          )}
        </Box>
      </FormControl>
      <EndpontsList
        isOpen={isOpen}
        onClose={onClose}
        selectedEndpoints={selectedEndpoints}
        setSelectedEndpoints={setSelectedEndpoints}
        addedEndpoints={addedEndpoints}
        setAddedEndpoints={setAddedEndpoints}
      />
      {isEndpointOpen && (
        <CreateEndpointModal
          isOpen={isEndpointOpen}
          onClose={onEndpointClose}
          callback={handleCreateEndpoint}
        />
      )}
    </Box>
  );
}
export default CreateTriggerEndpointsList;
