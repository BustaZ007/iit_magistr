import {
  Button,
  ButtonGroup,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { CaretDown, Plus } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type TCreateOrAttachButton = {
  onOpen: () => void;
  onCreateOpen: () => void;
  createTitle: string;
};

function CreateOrAttachButtons({
  onOpen,
  onCreateOpen,
  createTitle,
}: TCreateOrAttachButton) {
  const { t } = useTranslation('common');

  return (
    <ButtonGroup flexShrink={0} size="sm" colorScheme="blue" isAttached>
      <Button
        pl={2}
        leftIcon={<Icon as={Plus} w="5" h="5" />}
        fontWeight="normal"
        onClick={onOpen}
      >
        {t('Attach')}
      </Button>
      <Menu direction="rtl">
        <MenuButton
          ml="px"
          as={IconButton}
          icon={<Icon as={CaretDown} w={5} h={5} />}
          fontWeight="normal"
        />
        <MenuList onClick={onCreateOpen}>
          <MenuItem>{createTitle}</MenuItem>
        </MenuList>
      </Menu>
    </ButtonGroup>
  );
}

export default CreateOrAttachButtons;
