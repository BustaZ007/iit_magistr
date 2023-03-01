import { Icon, MenuItem } from "@chakra-ui/react";
import { PencilSimple } from "phosphor-react";

type TChangePasswordButtonElement = {
  onOpen: () => void;
};

export function ChangePasswordButtonElement({
  onOpen,
}: TChangePasswordButtonElement) {
  return (
    <MenuItem minH="10" onClick={onOpen} id="change-password-button-account">
      <Icon as={PencilSimple} w="6" h="6" mr="2" />
      Modal.ChangePassword.Button
    </MenuItem>
  );
}
