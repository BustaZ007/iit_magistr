import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { X } from 'phosphor-react';
import { ReactNode } from 'react';

type TCreateEntityDrawerBlock = {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  children: ReactNode;
};

function CreateEntityDrawerBlock({
  isOpen,
  onClose,
  heading,
  children,
}: TCreateEntityDrawerBlock) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          py={2}
          pl={6}
          pr={4}
          display="flex"
          w="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading
            fontSize="lg"
            noOfLines={1}
            wordBreak="break-all"
            fontWeight="semibold"
          >
            {heading}
          </Heading>
          <IconButton
            aria-label="Close"
            variant="ghost"
            icon={<Icon as={X} w="6" h="6" />}
            onClick={onClose}
            size="md"
          />
        </DrawerHeader>
        <Divider />
        <DrawerBody p={0}>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default CreateEntityDrawerBlock;
