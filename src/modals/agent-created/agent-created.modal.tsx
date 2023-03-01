import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import { Download } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { ModalBlock } from '../../blocks';
import { DownloadButtonsElement } from '../../elements';

type TAgentCreatedModal = {
  isOpen: boolean;
  onClose: () => void;
};

function AgentCreatedModal({ isOpen, onClose }: TAgentCreatedModal) {
  const { t } = useTranslation('components');

  return (
    <ModalBlock
      isOpen={isOpen}
      onClose={onClose}
      icon={Download}
      title={t('Modal.CreateAgent.Title')}
    >
      <Text>{t('Modal.CreateAgent.DownloadMessage')}</Text>
      <DownloadButtonsElement handleClick={onClose} />
      <ButtonGroup spacing="2" py="2">
        <Button
          colorScheme="blue"
          onClick={onClose}
          id="copy-and-close-button-agent-created"
          autoFocus
        >
          {t('Modal.CreateAgent.CloseButton')}
        </Button>
      </ButtonGroup>
    </ModalBlock>
  );
}

export default AgentCreatedModal;
