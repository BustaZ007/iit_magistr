import { formatNumber } from '@3divi/shared-components';
import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { useFilterIsActive } from '../../hooks';

type TFilterButton = {
  title: string;
  count: number;
  id?: string;
};

function FilterButton({ title, count, id }: TFilterButton) {
  const { t } = useTranslation('components');
  const { isActive, setGroup } = useFilterIsActive(title);
  const bg = useColorModeValue('blue.500', 'blue.200');
  const color = useColorModeValue('blue.600', 'blue.100');
  return (
    <Box
      id={id}
      position="relative"
      onClick={setGroup}
      py={2}
      role="group"
      _hover={{
        cursor: ' pointer',
      }}
    >
      <HStack spacing={1.5} color={isActive ? color : undefined}>
        <Text>{t(`Filters.${title}`)}</Text>
        <Text opacity={0.56}>· {formatNumber(count)}</Text>
      </HStack>
      <Box
        position="absolute"
        bottom="-px"
        zIndex="docked"
        h="px"
        w="100%"
        bg={isActive ? bg : undefined}
        _groupHover={{
          bg,
        }}
      />
    </Box>
  );
}
FilterButton.defaultProps = { id: undefined };
export default FilterButton;
