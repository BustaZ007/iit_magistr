import { Box, Divider, HStack, useColorModeValue } from '@chakra-ui/react';
import { FilterButton } from './elements';

type TFilterData = {
  title: string;
  count: number;
};

type TFilters = {
  filters: TFilterData[];
};

function Filters({ filters }: TFilters): JSX.Element {
  const color = useColorModeValue('white', 'transparent');

  return (
    <>
      <Box px={6} bg={color}>
        <HStack spacing={6}>
          {filters.map(({ title, count }) => (
            <FilterButton key={title} title={title} count={count} />
          ))}
        </HStack>
      </Box>
      <Divider />
    </>
  );
}

export default Filters;
