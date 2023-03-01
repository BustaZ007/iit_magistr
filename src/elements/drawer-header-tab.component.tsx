import { formatNumber } from '@3divi/shared-components';
import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react';

type TProfileHeaderTab = {
  index?: number;
  count?: number;
  title: string;
  setTabIndex?: (index: number) => void;
  isActive: boolean;
};

function DrawerHeaderTab({
  count,
  title,
  setTabIndex,
  index,
  isActive,
}: TProfileHeaderTab) {
  const underlineColor = useColorModeValue('blue.500', 'blue.200');
  const color = useColorModeValue('blue.600', 'blue.100');

  const handleTabClick = () => {
    if (setTabIndex) setTabIndex(Number(index));
  };

  return (
    <Box
      position="relative"
      ml={6}
      py={2}
      role="group"
      _hover={{
        cursor: ' pointer',
      }}
      onClick={handleTabClick}
    >
      <HStack spacing={1.5} color={isActive ? color : undefined}>
        <Text>{title}</Text>
        {count !== undefined && (
          <Text opacity={0.56}>· {formatNumber(count)}</Text>
        )}
      </HStack>
      <Box
        position="absolute"
        bottom="-px"
        zIndex="docked"
        h="px"
        w="100%"
        bg={isActive ? underlineColor : undefined}
        _groupHover={{
          bg: underlineColor,
        }}
      />
    </Box>
  );
}

export default DrawerHeaderTab;
