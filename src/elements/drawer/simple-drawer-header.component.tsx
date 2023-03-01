import { DrawerHeader, Heading, Icon, IconButton } from '@chakra-ui/react';
import { X } from 'phosphor-react';

type TSimpleDrawerHeader = {
  title: string;
  onClose: () => void;
};

function SimpleDrawerHeader({ title, onClose }: TSimpleDrawerHeader) {
  return (
    <DrawerHeader
      py={2}
      pl={6}
      pr={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexGrow={0}
    >
      <Heading
        fontSize="lg"
        noOfLines={1}
        wordBreak="break-all"
        fontWeight="semibold"
      >
        {title}
      </Heading>
      <IconButton
        aria-label="Close"
        variant="ghost"
        icon={<Icon as={X} w="6" h="6" />}
        onClick={onClose}
      />
    </DrawerHeader>
  );
}

export default SimpleDrawerHeader;
