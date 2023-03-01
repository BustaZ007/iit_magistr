import { Box, chakra, Flex, Show, useColorMode } from "@chakra-ui/react";
import logoLight from "../static/logo-light.png";
import logoDark from "../static/logo-dark.png";
import textLight from "../static/text-dark.png";
import textDark from "../static/text-light.png";

type TLogo = {
  h: number;
  mode?: "light" | "dark";
};

export function Logo({ h, mode = undefined }: TLogo) {
  const { colorMode } = useColorMode();
  return (
    <Flex align="flex-start">
      <chakra.img
        src={(mode || colorMode) === "light" ? logoLight : logoDark}
        h={h}
      />
      <Show above="lg">
        <Box pt={1} pl={h / 4}>
          <chakra.img
            src={(mode || colorMode) === "light" ? textLight : textDark}
            h={h}
          />
        </Box>
      </Show>
    </Flex>
  );
}
