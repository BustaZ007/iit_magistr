import {
  Button,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  Heading,
  HStack,
  Stack,
  chakra,
  Link,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LinksOnExternalSources } from '../../consts';
import { IS_AGENTS_MESSAGE_SHOWED } from '../../consts/cookies.const';
import { DownloadButtonsElement } from '../../elements';
import updateAgentImage from '../../static/upgrade-version-image.png';

type TUpdateOldAgents = {
  isOpen: boolean;
  onClose: () => void;
};

function UpdateOldAgents({ isOpen, onClose }: TUpdateOldAgents) {
  const { t } = useTranslation('components');

  const dontShowAgainHandler = useCallback(() => {
    localStorage.setItem(IS_AGENTS_MESSAGE_SHOWED, 'true');
    onClose();
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={false}
      closeOnOverlayClick={false}
      isCentered
      closeOnEsc={false}
    >
      <ModalOverlay />
      <ModalContent borderRadius="lg">
        <Stack spacing="4" py="6" px="10" alignItems="center">
          <chakra.img src={updateAgentImage} h="242px" />
          <HStack spacing="2">
            <Heading fontSize="2xl" fontWeight="medium">
              {t(`Modal.UpdateOldAgents.Title`)}
            </Heading>
          </HStack>
          <Text>{t(`Modal.UpdateOldAgents.FirstText`)}</Text>
          <DownloadButtonsElement />
          <Text>
            {t(`Modal.UpdateOldAgents.SecondText`)}
            <Link
              href={LinksOnExternalSources.RELEASE_NOTES}
              isExternal
              textDecoration="underline"
            >
              {t(`Modal.UpdateOldAgents.Link`)}
            </Link>
          </Text>
          <VStack spacing={2} w="full">
            <Button colorScheme="blue" onClick={onClose} w="full">
              {t(`Modal.UpdateOldAgents.OkButton`)}
            </Button>
            <Button
              fontWeight="normal"
              onClick={dontShowAgainHandler}
              variant="link"
              size="sm"
            >
              {t(`Modal.UpdateOldAgents.DontShowAgain`)}
            </Button>
          </VStack>
        </Stack>
      </ModalContent>
    </Modal>
  );
}

export default UpdateOldAgents;
