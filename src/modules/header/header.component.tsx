import { ColorModeSwitcher } from '@3divi/shared-components';
import { Box, Flex, ButtonGroup, useColorModeValue } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { AccountButtonModule } from '..';
import { PATHNAMES } from '../../consts';
import EntitiesSection from './entities-section.component';
import HeaderButtons from './header-buttons.component';
import TitleElement from './title.element';

function HeaderModule() {
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const { pathname } = useLocation();

  return (
    <>
      {pathname.includes(PATHNAMES.settings) ? <EntitiesSection /> : null}
      <Box
        flexGrow={1}
        flexShrink={1}
        overflow="hidden"
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Flex px="6" py="2" flexGrow={1} align="center">
          <Box flexGrow={1} flexShrink={1} overflow="hidden">
            <TitleElement />
          </Box>
          <ButtonGroup flexShrink={0} spacing="2" pl="4">
            <ColorModeSwitcher />
            <HeaderButtons />
          </ButtonGroup>
        </Flex>
      </Box>
      <Box borderBottom="1px" borderLeft="1px" borderColor={borderColor}>
        <AccountButtonModule />
      </Box>
    </>
  );
}

export default HeaderModule;
