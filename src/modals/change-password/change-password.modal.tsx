import { LockKey } from "phosphor-react";
import { ModalBlock } from "../../blocks";
import ChangePasswordFormModule from "./change-password-form.module";

type TChangePasswordModal = {
  isOpen: boolean;
  onClose: () => void;
};

function ChangePasswordModal({ isOpen, onClose }: TChangePasswordModal) {
  return (
    <ModalBlock
      isOpen={isOpen}
      onClose={onClose}
      icon={LockKey}
      title="Modal.ChangePassword.Title"
    >
      <ChangePasswordFormModule onClose={onClose} />
    </ModalBlock>
  );
}

export default ChangePasswordModal;
