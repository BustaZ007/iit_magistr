import { ChakraProvider } from "@chakra-ui/react";
import { ReactElement } from "react";
import theme from "../theme/theme";

type AppProviderProps = {
  children: ReactElement;
};

function AppProvider({ children }: AppProviderProps) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot={undefined}>
      {children}
    </ChakraProvider>
  );
}

export default AppProvider;
