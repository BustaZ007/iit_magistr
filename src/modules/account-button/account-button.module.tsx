import {
  Box,
  Button,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Hide,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { isOnPremise, useCustomQuery } from '@3divi/shared-components';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { SignOut, UserCircle } from 'phosphor-react';
import {
  ChangePasswordButtonElement,
  DeleteAccountButtonElement,
} from './elements';
import { ChangePasswordModal, DeleteAccountModal } from '../../modals';
import { GET_USER_EMAIL, useSignOut, getGreeting } from '../../domains/user';

type TUserEmailData = {
  me: {
    email: string;
  };
};

function AccountButtonModule() {
  const { t } = useTranslation('components');
  const { signOut: handleLogoutClick } = useSignOut();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, data } =
    useCustomQuery<TUserEmailData>(GET_USER_EMAIL);
  const pr = useBreakpointValue({ base: '0', md: '4' }) ?? '4';
  const modals = {
    delete: <DeleteAccountModal isOpen={isOpen} onClose={onClose} />,
    changePassword: <ChangePasswordModal isOpen={isOpen} onClose={onClose} />,
  };
  const [currentModal, setCurrentModal] =
    useState<keyof typeof modals>('delete');

  const handleOpenModal = (type: keyof typeof modals) => {
    setCurrentModal(type);
    onOpen();
  };

  if (error || loading) {
    return null;
  }

  const email = data?.me?.email ?? '';

  return (
    <Box p="2" minH="14">
      <Menu>
        <MenuButton
          fontWeight="normal"
          as={Button}
          variant="ghost"
          leftIcon={<Icon as={UserCircle} w="6" h="6" />}
          pl="2"
          pr={email ? pr : '0'}
        >
          <Hide below="md">
            <Text
              maxW="160px"
              noOfLines={1}
              wordBreak="break-all"
              display="block" // по умолчанию ставится -webkit-box, из-за этого работает только в Safari
              // display block работает во всех браузерах
            >
              {email}
            </Text>
          </Hide>
        </MenuButton>
        <MenuList zIndex="popover">
          <Box px="4" pt="1" pb="1.5">
            <Text fontSize="xs" opacity={0.48}>
              {t(`components:account.greetings.${getGreeting() ?? ''}`)}
            </Text>
            <Text maxW="200px" lineHeight="shorter">
              {email}
            </Text>
          </Box>
          <MenuDivider />
          <MenuGroup title={t('account.Title')}>
            <ChangePasswordButtonElement
              onOpen={() => {
                handleOpenModal('changePassword');
              }}
            />
            {!isOnPremise() && (
              <DeleteAccountButtonElement
                onOpen={() => {
                  handleOpenModal('delete');
                }}
              />
            )}
          </MenuGroup>
          <MenuDivider />
          <MenuItem
            minH="10"
            onClick={handleLogoutClick}
            id="logout-button-account"
          >
            <Icon as={SignOut} w="6" h="6" mr="2" />
            {t('account.logOut')}
          </MenuItem>
        </MenuList>
      </Menu>
      {modals[currentModal]}
    </Box>
  );
}

export default AccountButtonModule;
