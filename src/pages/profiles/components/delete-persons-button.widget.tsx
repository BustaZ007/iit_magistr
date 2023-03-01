import { Button, Icon, useColorModeValue } from '@chakra-ui/react';
import { Trash } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useDeleteProfiles } from '../../../domains/profiles';

type TDeletePersonsButton = {
  isDisabled: boolean;
  resetSelectedItems: () => void;
  selectedItems: string[];
};

function DeletePersonsButton({
  isDisabled,
  resetSelectedItems,
  selectedItems,
}: TDeletePersonsButton) {
  const { t } = useTranslation('components');
  const { deleteProfiles, loading: deleteLoading } = useDeleteProfiles(
    t(`Modal.DeleteProfile.ErrorDeleteProfiles`),
    t(`Modal.DeleteProfile.SuccessDeleteProfiles`),
    undefined
  );
  const color = useColorModeValue('black', 'white');
  const redColor = useColorModeValue('red', 'red.200');

  const handleDeleteProfiles = () => {
    deleteProfiles(selectedItems);
    resetSelectedItems();
  };
  return (
    <Button
      pl={2}
      leftIcon={
        <Icon as={Trash} w={5} h={5} color={isDisabled ? color : redColor} />
      }
      onClick={handleDeleteProfiles}
      size="sm"
      ml={6}
      variant="outline"
      fontWeight="normal"
      disabled={isDisabled || deleteLoading}
    >
      {t('common:Delete')}
    </Button>
  );
}

export default DeletePersonsButton;
