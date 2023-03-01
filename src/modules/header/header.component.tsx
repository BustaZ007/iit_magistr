import { Box, Flex, ButtonGroup, useColorModeValue } from "@chakra-ui/react";
import { AccountButtonModule } from "..";
import { ColorModeSwitcher } from "../../elements";
import TitleElement from "./title.element";

function HeaderModule() {
  const borderColor = useColorModeValue("gray.100", "gray.700");

  return (
    <>
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
