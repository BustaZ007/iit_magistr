import { chakra, Flex, useColorMode } from "@chakra-ui/react";
import logoLight from "../static/logo-light.png";
import logoDark from "../static/logo-dark.png";

type TLogo = {
  h: number;
  mode?: "light" | "dark";
};

export function Logo({ h, mode = undefined }: TLogo) {
  const { colorMode } = useColorMode();
  return (
    <Flex align="flex-start" w={10}>
      <chakra.img
        src={(mode || colorMode) === "light" ? logoLight : logoDark}
        h={h}
      />
    </Flex>
  );
}
