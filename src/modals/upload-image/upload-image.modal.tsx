import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import DropArea from './drop-area.module';

type TUploadImageModal = {
  isOpen: boolean;
  onClose: () => void;
};

function UploadImageModal({ isOpen, onClose }: TUploadImageModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="3xl">
      <ModalOverlay />
      <ModalContent borderRadius="lg">
        <DropArea onClose={onClose} />
      </ModalContent>
    </Modal>
  );
}

export default UploadImageModal;
