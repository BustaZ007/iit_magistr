import { useReactiveVar } from '@apollo/client';
import {
  Button,
  ButtonGroup,
  Hide,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';
import { CaretDown, Plus } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { personLoadingFiles } from '../domains/profiles';
import { UploadImageModal, CreatePersonDrawer } from '../modals';

function PersonCreateButton() {
  const loadingFiles = useReactiveVar(personLoadingFiles);
  const { t } = useTranslation('components');
  const {
    isOpen: isDropAreaOpen,
    onOpen: onDropAreaOpen,
    onClose: onDropAreaClose,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  return (
    <>
      <ButtonGroup
        flexShrink={0}
        pl="2"
        size="md"
        colorScheme="blue"
        isAttached
      >
        <Button
          pl={2}
          leftIcon={<Icon as={Plus} w="6" h="6" />}
          fontWeight="normal"
          isDisabled={!!loadingFiles.length}
          onClick={onDrawerOpen}
          id="create-profile-button"
        >
          <Hide below="md">{t('Header.CreateButton.profiles')}</Hide>
        </Button>
        <Menu direction="rtl">
          <MenuButton
            isDisabled={!!loadingFiles.length}
            ml="px"
            as={IconButton}
            icon={<Icon as={CaretDown} w={5} h={5} />}
            fontWeight="normal"
          />
          <Portal>
            <MenuList>
              <MenuItem
                onClick={onDropAreaOpen}
                id="create-many-profile-button"
              >
                {t('Header.CreateButton.ManyProfiles')}
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </ButtonGroup>
      {isDropAreaOpen && (
        <UploadImageModal isOpen={isDropAreaOpen} onClose={onDropAreaClose} />
      )}
      {isDrawerOpen && (
        <CreatePersonDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
      )}
    </>
  );
}

export default PersonCreateButton;
