import {
  Divider,
  Drawer,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { FormEvent, ReactNode } from 'react';
import { SimpleDrawerHeader } from '../drawer';
import CreateEntityDrawerBody from './create-entity-drawer-body.component';

type TCreateEntityDrawer = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  formElements: ReactNode | ReactNode[];
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  isFormButtonDisabled?: boolean;
};

function CreateEntityDrawer({
  onClose,
  isOpen,
  title,
  formElements,
  handleSubmit,
  isFormButtonDisabled,
}: TCreateEntityDrawer) {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="xl">
      <DrawerOverlay />
      <DrawerContent overflowY="auto">
        <SimpleDrawerHeader title={title} onClose={onClose} />
        <Divider />
        <form onSubmit={handleSubmit}>
          <CreateEntityDrawerBody
            formElements={formElements}
            onClose={onClose}
            isFormButtonDisabled={isFormButtonDisabled}
          />
        </form>
      </DrawerContent>
    </Drawer>
  );
}

export default CreateEntityDrawer;
