import {
  Box,
  Button,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup,
  Hide,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { SignOut, UserCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { DeleteAccountButtonElement } from "./elements";
import { DeleteAccountModal } from "../../modals";
import { getGreeting } from "../../helpers";
import { PATHNAMES } from "../../consts";

function AccountButtonModule() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pr = useBreakpointValue({ base: "0", md: "4" }) ?? "4";
  const modals = {
    delete: <DeleteAccountModal isOpen={isOpen} onClose={onClose} />,
  };
  const navigate = useNavigate();
  const [currentModal, setCurrentModal] =
    useState<keyof typeof modals>("delete");

  const handleOpenModal = (type: keyof typeof modals) => {
    setCurrentModal(type);
    onOpen();
  };

  const email = "pp@pp.ru"; // TODO: Fix when email can be accessed
  const greetings = {
    morning: `Доброе утро,`,
    day: `Добрый день,`,
    evening: `Добрый вечер,`,
    night: `Доброй ночи,`,
  };
  return (
    <Box p="2" minH="14">
      <Menu>
        <MenuButton
          fontWeight="normal"
          as={Button}
          variant="ghost"
          leftIcon={<Icon as={UserCircle} w="6" h="6" />}
          pl="2"
          pr={email ? pr : "0"}
        >
          <Hide below="md">
            <Text
              maxW="160px"
              noOfLines={1}
              wordBreak="break-all"
              display="block"
            >
              {email}
            </Text>
          </Hide>
        </MenuButton>
        <MenuList zIndex="popover">
          <Box px="4" pt="1" pb="1.5">
            <Text fontSize="xs" opacity={0.48}>
              {greetings[getGreeting()]}
            </Text>
            <Text maxW="200px" lineHeight="shorter">
              {email}
            </Text>
          </Box>
          <MenuDivider />
          <MenuGroup title="Аккаунт">
            <DeleteAccountButtonElement
              onOpen={() => {
                handleOpenModal("delete");
              }}
            />
          </MenuGroup>
          <MenuDivider />
          <MenuItem
            minH="10"
            onClick={() => navigate(PATHNAMES.sign_in)} // TODO: Fix after signOut can be accessed
            id="logout-button-account"
          >
            <Icon as={SignOut} w="6" h="6" mr="2" />
            Выйти
          </MenuItem>
        </MenuList>
      </Menu>
      {modals[currentModal]}
    </Box>
  );
}

export default AccountButtonModule;
