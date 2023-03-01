import { Button, DrawerBody, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type TCreateEntityDrawerBody = {
  formElements: ReactNode | ReactNode[];
  onClose: () => void;
  isFormButtonDisabled?: boolean;
};

function CreateEntityDrawerBody({
  formElements,
  onClose,
  isFormButtonDisabled,
}: TCreateEntityDrawerBody) {
  const { t } = useTranslation('common');
  return (
    <DrawerBody p={0} display="flex" flexDir="column" h="100%">
      {formElements}
      <Flex py={3} pl={174} gap={3} alignItems="center">
        <Button
          type="submit"
          colorScheme="blue"
          isDisabled={isFormButtonDisabled}
        >
          {t('Create')}
        </Button>
        <Button onClick={onClose} isDisabled={isFormButtonDisabled}>
          {t('Cancel')}
        </Button>
      </Flex>
    </DrawerBody>
  );
}

export default CreateEntityDrawerBody;
