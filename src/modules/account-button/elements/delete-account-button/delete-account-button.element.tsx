import { Icon, MenuItem } from "@chakra-ui/react";
import { Trash } from "phosphor-react";

type TDeleteAccountButtonElement = {
  onOpen: () => void;
};

export function DeleteAccountButtonElement({
  onOpen,
}: TDeleteAccountButtonElement) {
  return (
    <MenuItem minH="10" onClick={onOpen} id="delete-button-account">
      <Icon as={Trash} w="6" h="6" mr="2" />
      account.delAcc
    </MenuItem>
  );
}
