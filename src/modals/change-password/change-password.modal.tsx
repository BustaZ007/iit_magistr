import { LockKey } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { ModalBlock } from '../../blocks';
import ChangePasswordFormModule from './change-password-form.module';

type TChangePasswordModal = {
  isOpen: boolean;
  onClose: () => void;
};

function ChangePasswordModal({ isOpen, onClose }: TChangePasswordModal) {
  const { t } = useTranslation('components');
  return (
    <ModalBlock
      isOpen={isOpen}
      onClose={onClose}
      icon={LockKey}
      title={t('Modal.ChangePassword.Title')}
    >
      <ChangePasswordFormModule onClose={onClose} />
    </ModalBlock>
  );
}

export default ChangePasswordModal;
