import {
  Button,
  Hide,
  Icon,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Plus } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import {
  AgentCreatedModal,
  CreateEndpointModal,
  CreateFieldModal,
  CreateGroupModal,
  CreateIntegrationDrawer,
  CreateTriggerModal,
} from '../modals';

type TCreateEntityButton = {
  text: string;
  colorScheme?: 'blue' | 'gray';
  entityTitle:
    | 'group'
    | 'agent'
    | 'endpoint'
    | 'trigger'
    | 'profilesField'
    | 'integration';
};

const EntityDrawers = {
  group: (isOpen: boolean, onClose: () => void) =>
    isOpen && <CreateGroupModal isOpen={isOpen} onClose={onClose} />,

  endpoint: (isOpen: boolean, onClose: () => void) =>
    isOpen && <CreateEndpointModal isOpen={isOpen} onClose={onClose} />,

  agent: (isOpen: boolean, onClose: () => void) =>
    isOpen && <AgentCreatedModal isOpen={isOpen} onClose={onClose} />,

  trigger: (isOpen: boolean, onClose: () => void) =>
    isOpen && <CreateTriggerModal isOpen={isOpen} onClose={onClose} />,

  profilesField: (isOpen: boolean, onClose: () => void) =>
    isOpen && <CreateFieldModal isOpen={isOpen} onClose={onClose} />,

  integration: (isOpen: boolean, onClose: () => void) =>
    isOpen && <CreateIntegrationDrawer isOpen={isOpen} onClose={onClose} />,
};

function CreateEntityButton({
  text,
  colorScheme = 'blue',
  entityTitle,
}: TCreateEntityButton) {
  const { t } = useTranslation('components');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pr = useBreakpointValue({ base: '0', md: '4' }) ?? '4';

  return (
    <>
      <Button
        colorScheme={colorScheme}
        fontWeight="normal"
        leftIcon={<Icon as={Plus} w="6" h="6" />}
        pl="2"
        pr={pr}
        loadingText={t('common:Creating')}
        onClick={onOpen}
        id={`create-${entityTitle}-button`}
        flexGrow={1}
      >
        <Hide below="md">{text}</Hide>
      </Button>

      {EntityDrawers[entityTitle](isOpen, onClose)}
    </>
  );
}

export default CreateEntityButton;
