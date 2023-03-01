import {
  Box,
  Text,
  useColorModeValue,
  HStack,
  Icon,
  As,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type TSectionButtonBlock = {
  title: string;
  subtitle: string;
  icon: As<any>;
  url: string;
  id?: string;
  children?: ReactNode;
  isDisabled?: boolean;
};

export function SectionButtonBlock({
  title,
  subtitle,
  icon,
  url,
  id,
  children,
  isDisabled,
}: TSectionButtonBlock) {
  return (
    <Box
      id={id}
      as="a"
      target="_blank"
      href={url && !isDisabled ? url : undefined}
      w="100%"
      border="1px"
      borderRadius="lg"
      borderColor={useColorModeValue("gray.200", "whiteAlpha.300")}
      _hover={{
        background: useColorModeValue("gray.100", "whiteAlpha.200"),
        cursor: "pointer",
      }}
      pointerEvents={!url || isDisabled ? "none" : undefined}
      opacity={!url || isDisabled ? 0.48 : undefined}
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

SectionButtonBlock.defaultProps = {
  id: undefined,
};
