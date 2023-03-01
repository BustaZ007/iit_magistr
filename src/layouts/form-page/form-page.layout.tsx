import { ReactNode } from "react";
import { Box, HStack, Spacer, Container } from "@chakra-ui/react";
import { ColorModeSwitcher, Logo } from "../../elements";

type TFormPageLayout = {
  buttons?: ReactNode;
  children: ReactNode;
};

export function FormPageLayout({
  buttons = undefined,
  children,
}: TFormPageLayout) {
  return (
    <>
      <Box px="6" py="4">
        <HStack spacing={2}>
          <Logo h={8} />
          <Spacer />
          {buttons}
          <ColorModeSwitcher />
        </HStack>
      </Box>
      <Container
        maxW="md"
        pt={{ base: "12", md: "16" }}
        pb={{ base: "24", md: "32" }}
        px="6"
      >
        {children}
      </Container>
    </>
  );
}
