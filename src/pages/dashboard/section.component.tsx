import {
  Box,
  Text,
  useColorModeValue,
  HStack,
  Icon,
  As,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type TCard = {
  title: string;
  subtitle: string;
  id?: string;
  children?: ReactNode;
  icon: As<any>;
};

export function Card({
  title,
  subtitle,
  icon,
  id = undefined,
  children,
}: TCard) {
  return (
    <Box
      id={id}
      w="100%"
      border="1px"
      borderRadius="lg"
      borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
    >
      <Box px="4" py="3">
        <HStack spacing="2">
          <Icon as={icon} w="6" h="6" />
          <Text fontWeight="semibold">{title}</Text>
        </HStack>
        <Text pt="2" fontSize="sm" opacity={0.88}>
          {subtitle}
        </Text>
        {children}
      </Box>
    </Box>
  );
}
