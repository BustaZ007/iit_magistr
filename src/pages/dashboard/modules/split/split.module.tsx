import {
  Box,
  useColorModeValue,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

type TSplitModule = {
  isLoading: boolean;
  isError: boolean;
};

function SplitModule({ isError, isLoading }: TSplitModule) {
  const bg = useColorModeValue("white", "gray.700");
  const boxShadow = useColorModeValue("sm", "sm-dark");

  return (
    <Box bg={bg} borderRadius="lg" boxShadow={boxShadow} w="100%">
      <Box px="6" py="4">
        {isLoading && (
          <Box p="0.5" w="7" h="7">
            <Spinner size="md" />
          </Box>
        )}
        {isError && (
          <Alert status="error" borderRadius="lg">
            <AlertIcon />
            pages:Dashboard.Widgets.Analytic.Login
          </Alert>
        )}
      </Box>
    </Box>
  );
}

export default SplitModule;
