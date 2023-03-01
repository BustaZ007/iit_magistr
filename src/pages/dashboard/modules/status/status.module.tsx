import {
  Box,
  Heading,
  Icon,
  useColorModeValue,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CheckCircle, WarningCircle } from "phosphor-react";

type TStatusModule = {
  activeAgentsCount: number;
};

export function StatusModule({ activeAgentsCount }: TStatusModule) {
  const bg = useColorModeValue("white", "gray.700");
  const boxShadow = useColorModeValue("sm", "sm-dark");

  return (
    <Box bg={bg} borderRadius="lg" boxShadow={boxShadow} w="100%">
      <Box p="12">
        <VStack spacing="3" textAlign="center">
          <Icon
            as={activeAgentsCount === 0 ? WarningCircle : CheckCircle}
            w="10"
            h="10"
            color="green.400"
          />
          <Heading fontWeight="semibold" size="md">
            Dashboard.AllOkTitle
          </Heading>
          <Text>Dashboard.AllOkMessage</Text>
        </VStack>
      </Box>
    </Box>
  );
}
