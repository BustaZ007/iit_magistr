import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  [x: string]: any;
};

type TUseModal = {
  modals: {
    [x: string]: ({ isOpen, onClose, ...props }: Props) => JSX.Element;
  };
};

const useModal = ({ modals }: TUseModal) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentModal, setCurrentModal] = useState<keyof typeof modals>('');

  const handleOpenModal = (type: keyof typeof modals) => {
    setCurrentModal(type);
    onOpen();
  };

  const components: {
    [x: string]: JSX.Element;
  } = {};

  Object.keys(modals).forEach((key) => {
    const element = modals[key]?.({ isOpen, onClose });
    if (element) {
      components[key] = element;
    }
  });

  return {
    currentModal,
    handleOpenModal,
    components,
  };
};

export default useModal;
