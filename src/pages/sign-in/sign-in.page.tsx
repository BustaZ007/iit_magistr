import {
  HStack,
  Heading,
  Stack,
  Icon,
  Box,
  Container,
  Spacer,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { SignIn } from "phosphor-react";
import { SignInFormModule } from "./sign-in-form.module";
import { Logo, ColorModeSwitcher } from "../../elements";
import loginBackground from "../../static/login-background.jpeg";

export function SignInPage() {
  const loginBackgroundImage = useBreakpointValue({
    md: undefined,
    lg: loginBackground,
  });
  const wightWhiteBg = useBreakpointValue({
    sm: "full",
    lg: "60%",
  });
  const borderWhiteBg = useBreakpointValue({
    sm: undefined,
    lg: "120px solid transparent",
  });
  const bgColor = useColorModeValue("white", "#1A202C");

  return (
    <Box
      backgroundImage={loginBackgroundImage}
      backgroundSize="cover"
      h="100vh"
    >
      <Box backgroundColor="blackAlpha.600" h="full" position="relative">
        <Box
          position="absolute"
          zIndex={0}
          top={0}
          w={wightWhiteBg}
          h="full"
          borderRight={borderWhiteBg}
          borderTop={`100vh solid ${bgColor}`}
        />
        <Box px="6" py="4" position="relative">
          <HStack
            spacing={2}
            w={{
              sm: "full",
              lg: "58%",
            }}
          >
            <Logo h={7} />
            <Spacer />
            <ColorModeSwitcher />
          </HStack>
        </Box>
        <Container
          display="flex"
          mt="-72px"
          h="full"
          alignItems="center"
          justifyContent="center"
          marginStart={{ sm: "auto", lg: "10%", xl: "18%" }}
          marginEnd={{ sm: "auto", base: undefined }}
          maxW="md"
          pt={{ base: "12", md: "16" }}
          pb={{ base: "24", md: "32" }}
          px="6"
        >
          <Stack spacing={8} position="relative">
            <HStack spacing={2}>
              <Icon as={SignIn} w="12" h="12" />
              <Heading fontSize="4xl" fontWeight="normal">
                Авторизация
              </Heading>
            </HStack>
            <SignInFormModule />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
