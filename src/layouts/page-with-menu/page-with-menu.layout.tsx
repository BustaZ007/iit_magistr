import { Box, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { Logo, MenuItemElement } from "../../elements";
import { HeaderModule } from "../../modules";
import { MenuItems } from "../../consts";

const FoundationYear = "2023";
function PageWithMenuLayout() {
  const logoSize = useBreakpointValue({ base: 7, lg: 6 }) || 7;
  const showCopyright = useBreakpointValue({ base: false, lg: true });
  const { pathname } = useLocation();

  return (
    <Flex direction="column" h="100vh" maxH="100vh" overflow="hidden" w="100%">
      <Flex>
        <Box
          flexShrink={0}
          bg="gray.800"
          w={{ base: "auto", lg: "216px" }}
          minH="14"
          borderRight="1px"
          borderBottom="1px"
          borderColor="whiteAlpha.200"
        >
          <Box px="4" py="3.5">
            <Logo mode="dark" h={logoSize} />
          </Box>
        </Box>
        <HeaderModule />
      </Flex>
      <Flex flexGrow={1} overflow="hidden">
        <VStack
          h="full"
          flexShrink={0}
          w={{ base: "auto", lg: "216px" }}
          overflowX="hidden"
          overflowY="auto"
          bg="gray.800"
          borderRight="1px"
          borderColor="whiteAlpha.200"
        >
          <VStack
            width="full"
            spacing="px"
            alignItems="flex-start"
            p="2"
            flexGrow={1}
            position="relative"
          >
            {MenuItems.map((menuItem) => (
              <MenuItemElement
                key={menuItem.title}
                icon={menuItem.icon}
                to={menuItem.to[0]}
                title={menuItem.title}
                active={
                  !!menuItem.to.find(
                    (element) =>
                      element.replace(/\//g, "") === pathname.replace(/\//g, "")
                  )
                }
                count={23}
              />
            ))}
          </VStack>
          <VStack p={2}>
            <Text fontSize="xs" textAlign="left" color="gray.600">
              Version 1.0.0 IIT Inc.
            </Text>
            {showCopyright && (
              <Text fontSize="xs" color="gray.600" textAlign="center">
                © All rights reserved bu IIT {FoundationYear}-2023
              </Text>
            )}
          </VStack>
        </VStack>
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default PageWithMenuLayout;
