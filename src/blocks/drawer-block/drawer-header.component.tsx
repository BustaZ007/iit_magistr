import {
  Button,
  ButtonGroup,
  DrawerHeader,
  Icon,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Trash, X } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { ShortUUIDLabel } from '../../elements';
import { DeleteModal } from '../../modals';

type TDeleteEntity = {
  deleteAction: () => void;
  deleteHeaderText: string;
  deleteBodyText: string;
  deleteLoading: boolean;
  buttonId: string;
};

type TDrawerBlockHeader = {
  id: string;
  onClose: () => void;
  deleteEntity: TDeleteEntity | undefined;
};

function DrawerBlockHeader({ id, onClose, deleteEntity }: TDrawerBlockHeader) {
  const { t } = useTranslation('common');
  const {
    isOpen,
    onClose: onDeleteClose,
    onOpen: onDeleteOpen,
  } = useDisclosure();

  return (
    <DrawerHeader
      py={2}
      pl={6}
      pr={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexGrow={0}
    >
      <ShortUUIDLabel id={id} />
      <ButtonGroup>
        {deleteEntity && (
          <Button
            leftIcon={<Icon as={Trash} w="6" h="6" color="red.400" />}
            variant="ghost"
            pl={2}
            fontWeight="normal"
            onClick={onDeleteOpen}
            id={deleteEntity.buttonId}
          >
            {t('Delete')}
          </Button>
        )}
        <IconButton
          aria-label="Close"
          variant="ghost"
          icon={<Icon as={X} w="6" h="6" />}
          onClick={onClose}
        />
      </ButtonGroup>
      {deleteEntity && (
        <DeleteModal
          isOpen={isOpen}
          onClose={onDeleteClose}
          bodyText={deleteEntity.deleteBodyText}
          callback={deleteEntity.deleteAction}
          headerText={deleteEntity.deleteHeaderText}
          loading={deleteEntity.deleteLoading}
        />
      )}
    </DrawerHeader>
  );
}

export default DrawerBlockHeader;
