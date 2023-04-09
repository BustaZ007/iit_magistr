import {
  Box,
  Flex,
  Icon,
  IconButton,
  Spacer,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import { ArrowLineLeft, ArrowLineRight } from "phosphor-react";
import { useCallback, useState } from "react";
import { Logo, MenuItemElement } from "../../elements";
import { HeaderModule } from "../../modules";
import { MenuItems } from "../../consts";

function PageWithMenuLayout() {
  const [isMenuExpanded, setMenuExpandedStatus] = useState<boolean>(
    localStorage.getItem("isMenuExpanded") === null
      ? true
      : !!Number(localStorage.getItem("isMenuExpanded"))
  );
  const [isMenuHovered, setMenuHoverStatus] = useState<boolean>(false);
  const lowSize = useBreakpointValue({ base: true, lg: false });
  const { pathname } = useLocation();
  const borderColor = useColorModeValue("gray.100", "gray.700");

  const handleChangeMenuStatus = useCallback(() => {
    setMenuExpandedStatus(!isMenuExpanded);
    localStorage.setItem("isMenuExpanded", isMenuExpanded ? "0" : "1");
  }, [setMenuExpandedStatus, isMenuExpanded]);

  const handleMouseEnter = useCallback(() => {
    setMenuHoverStatus(true);
  }, [setMenuHoverStatus]);

  const handleMouseLeave = useCallback(() => {
    setMenuHoverStatus(false);
  }, [setMenuHoverStatus]);

  return (
    <Flex direction="column" h="100vh" maxH="100vh" overflow="hidden" w="100%">
      <Flex>
        <Box
          flexShrink={0}
          w={!lowSize && (isMenuExpanded || isMenuHovered) ? "216px" : "auto"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          minH="14"
          borderRight="1px"
          borderBottom="1px"
          borderColor={borderColor}
        >
          <Flex px="2" h="100%" alignItems="center">
            <Logo h={7} />
            <Spacer />
            {!lowSize && (isMenuExpanded || isMenuHovered) && (
              <IconButton
                icon={
                  <Icon
                    as={isMenuExpanded ? ArrowLineLeft : ArrowLineRight}
                    w="4"
                    h="4"
                  />
                }
                aria-label=""
                onClick={handleChangeMenuStatus}
                variant="ghost"
                color="current"
                size="xs"
              />
            )}
          </Flex>
        </Box>
        <HeaderModule />
      </Flex>
      <Flex flexGrow={1} overflow="hidden">
        <VStack
          h="full"
          flexShrink={0}
          w={!lowSize && (isMenuExpanded || isMenuHovered) ? "216px" : "auto"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          overflowX="hidden"
          overflowY="auto"
          borderRight="1px"
          borderColor={borderColor}
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
                isMenuExpanded={!lowSize && (isMenuExpanded || isMenuHovered)}
                active={
                  !!menuItem.to.find(
                    (element) =>
                      element.replace(/\//g, "") === pathname.replace(/\//g, "")
                  )
                }
              />
            ))}
          </VStack>
          {!lowSize && (isMenuExpanded || isMenuHovered) && (
            <VStack p={2}>
              <Text fontSize="xs" textAlign="left" color="gray.600">
                Версия 1.0.0.
              </Text>
            </VStack>
          )}
        </VStack>
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default PageWithMenuLayout;
