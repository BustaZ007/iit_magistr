import {
  Box,
  Flex,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Logo } from '../../elements';
import { HeaderModule } from '../../modules';

function PageLayout() {
  const logoSize = useBreakpointValue({ base: 7, md: 6 }) || 7;
  const w = useBreakpointValue({ base: 'auto', md: '216px' });
  const borderColor = useColorModeValue('gray.100', 'whiteAlpha.200');
  return (
    <Flex direction="column" h="100vh" maxH="100vh" overflow="hidden" w="100%">
      <Flex>
        <Box
          flexShrink={0}
          w={w}
          minH="14"
          borderRight="1px"
          borderBottom="1px"
          borderColor={borderColor}
        >
          <Box px="4" py="3.5">
            <Logo h={logoSize} />
          </Box>
        </Box>
        <HeaderModule />
      </Flex>
      <Flex flexGrow={1} overflow="hidden">
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default PageLayout;
