import { Button, Flex, Icon, Spacer } from '@chakra-ui/react';
import { Pencil, X } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type TProfileCardInfoButtons = {
  handleResetForm: () => void;
  isEditing: boolean;
};

function EditableControlButtons({
  handleResetForm,
  isEditing,
}: TProfileCardInfoButtons) {
  const { t } = useTranslation('common');

  return isEditing ? (
    <Flex pt={2} justifyContent="flex-end">
      <Button
        colorScheme="blue"
        fontWeight="normal"
        leftIcon={<Icon as={Pencil} w={6} h={6} />}
        pl="2"
        type="submit"
        w={160}
      >
        {t('Save')}
      </Button>
      <Spacer />
      <Button
        leftIcon={<Icon as={X} w={6} h={6} />}
        variant="outline"
        fontWeight="normal"
        onClick={handleResetForm}
      >
        {t('Cancel')}
      </Button>
    </Flex>
  ) : null;
}

export default EditableControlButtons;
