import {
  Button,
  ButtonGroup,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { PaperPlaneTilt, Trash } from "phosphor-react";
import { ModalBlock } from "../../blocks";

type TDeleteAccountModal = {
  isOpen: boolean;
  onClose: () => void;
};

function DeleteAccountModal({ isOpen, onClose }: TDeleteAccountModal) {
  const { hasCopied, onCopy } = useClipboard("pp@pp.ru");

  return (
    <ModalBlock
      isOpen={isOpen}
      onClose={onClose}
      icon={Trash}
      title="Modal.DeleteAccount.Title"
    >
      <Text>Modal.DeleteAccount.Message</Text>
      <HStack spacing={2} w="100%">
        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">
            <Icon as={PaperPlaneTilt} opacity={0.48} w="6" h="6" />
          </InputLeftElement>
          <Input
            flexShrink={1}
            isReadOnly
            value="pp@pp.ru"
            id="key"
            type="text"
          />
        </InputGroup>
        <Button
          flexShrink={0}
          variant="outline"
          size="md"
          fontWeight="normal"
          onClick={onCopy}
          autoFocus
          id="copy-email-delete-account-button"
        >
          {hasCopied ? "Copied" : "CopyEmail"}
        </Button>
      </HStack>
      <ButtonGroup spacing="2" py="2">
        <Button
          colorScheme="blue"
          onClick={onClose}
          id="cancel-account-delete-button"
        >
          Modal.Letter.CloseButton
        </Button>
        <Button
          as="a"
          href="mailto:pp@pp.ru"
          fontWeight="normal"
          id="write-letter-delete-account-button"
        >
          Modal.Letter.WriteButton
        </Button>
      </ButtonGroup>
    </ModalBlock>
  );
}

export default DeleteAccountModal;
