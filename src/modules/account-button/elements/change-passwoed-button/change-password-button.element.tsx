import { Icon, MenuItem } from '@chakra-ui/react';
import { PencilSimple } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type TChangePasswordButtonElement = {
  onOpen: () => void;
};

export function ChangePasswordButtonElement({
  onOpen,
}: TChangePasswordButtonElement) {
  const { t } = useTranslation('components');
  return (
    <MenuItem minH="10" onClick={onOpen} id="change-password-button-account">
      <Icon as={PencilSimple} w="6" h="6" mr="2" />
      {t('Modal.ChangePassword.Button')}
    </MenuItem>
  );
}
