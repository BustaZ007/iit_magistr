import { Button, ButtonGroup, Text } from '@chakra-ui/react';
import { Trash } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { ModalBlock } from '../../blocks';

type TDeleteModal = {
  isOpen: boolean;
  onClose: () => void;
  callback: () => void;
  headerText: string;
  bodyText: string;
  loading: boolean;
};

function DeleteModal({
  isOpen,
  onClose,
  callback,
  bodyText,
  headerText,
  loading,
}: TDeleteModal) {
  const { t } = useTranslation('common');

  return (
    <ModalBlock
      isOpen={isOpen}
      onClose={onClose}
      icon={Trash}
      title={headerText}
    >
      <Text>{bodyText}</Text>
      <ButtonGroup py="2">
        <Button
          colorScheme="red"
          isLoading={loading}
          onClick={callback}
          loadingText={t(`Deleting`)}
          autoFocus
        >
          {t(`Delete`)}
        </Button>
        <Button fontWeight="normal" onClick={onClose}>
          {t(`Cancel`)}
        </Button>
      </ButtonGroup>
    </ModalBlock>
  );
}

export default DeleteModal;
