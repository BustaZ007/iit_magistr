import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { Moon, Sun } from "phosphor-react";

function ColorModeSwitcher() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(Moon, Sun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<Icon as={SwitchIcon} w="6" h="6" />}
      aria-label={`Switch to ${text} mode`}
    />
  );
}

export default ColorModeSwitcher;
