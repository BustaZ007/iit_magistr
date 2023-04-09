import {
  As,
  Box,
  Flex,
  HStack,
  Icon,
  Show,
  Tag,
  TagLabel,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

type TMenuItemElement = {
  title: string;
  to: string;
  icon: As<any>;
  active: boolean;
  isMenuExpanded: boolean;
  count?: number;
};

function MenuItemElement({
  icon,
  title,
  to,
  active,
  count,
  isMenuExpanded,
}: TMenuItemElement) {
  const hoverBgActive = useColorModeValue("blackAlpha.100", "gray.600");
  const hoverBgNoActive = useColorModeValue("blackAlpha.200", "gray.700");
  const bg = useColorModeValue("blackAlpha.200", "gray.700");
  return (
    <Box
      as={Link}
      to={to}
      alignItems="center"
      h="28px"
      w="100%"
      px={3}
      py="1"
      borderRadius="lg"
      bg={active ? bg : "transparent"}
      _hover={{
        bg: active ? hoverBgActive : hoverBgNoActive,
      }}
      display="flex"
      alignContent="center"
    >
      <HStack spacing={2.5}>
        <Icon as={icon} w="4" h="4" />
        <Show above="lg">
          {isMenuExpanded && (
            <Flex justifyContent="space-between" w="full">
              <Text fontSize="sm" h="20px">
                {title}
              </Text>
              {count && (
                <Tag
                  size="sm"
                  borderRadius="full"
                  variant="solid"
                  colorScheme="red"
                >
                  <TagLabel>{count}</TagLabel>
                </Tag>
              )}
            </Flex>
          )}
        </Show>
      </HStack>
    </Box>
  );
}

export default MenuItemElement;
