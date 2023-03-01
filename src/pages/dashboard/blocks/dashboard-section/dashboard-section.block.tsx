import {
  Box,
  useColorModeValue,
  HStack,
  Divider,
  VStack,
  Icon,
  Heading,
  Spinner,
  As,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type TDashboardSectionBlock = Partial<{
  icon: As<any>;
  title: string;
  children: ReactNode;
  loading: boolean;
}>;

export function DashboardSectionBlock({
  icon,
  title,
  children,
  loading,
}: TDashboardSectionBlock) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      borderRadius="lg"
      boxShadow={useColorModeValue("sm", "sm-dark")}
      w="100%"
    >
      <HStack spacing="3" px="6" py="4">
        {loading ? (
          <Box p="0.5" w="7" h="7">
            <Spinner size="md" />
          </Box>
        ) : (
          <Icon as={icon} w="7" h="7" />
        )}
        <Heading fontSize="lg" fontWeight="medium">
          {title}
        </Heading>
      </HStack>
      {children && (
        <>
          <Divider />
          <VStack spacing="4" px="6" py="5" alignItems="flex-start">
            {children}
          </VStack>
        </>
      )}
    </Box>
  );
}
