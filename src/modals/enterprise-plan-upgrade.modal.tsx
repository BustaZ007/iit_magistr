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
} from '@chakra-ui/react';
import { ArrowFatLineUp, PaperPlaneTilt } from 'phosphor-react';

import { useTranslation } from 'react-i18next';
import { ModalBlock } from '../blocks';
import { Mails } from '../consts';

type TDeleteAccountModal = {
  isOpen: boolean;
  onClose: () => void;
};

function EnterprisePlanUpgradeModal({ isOpen, onClose }: TDeleteAccountModal) {
  const { t } = useTranslation('components');

  const { hasCopied, onCopy } = useClipboard(Mails.SUPPORT);

  return (
    <ModalBlock
      isOpen={isOpen}
      onClose={onClose}
      icon={ArrowFatLineUp}
      title={t('Modal.EnterprisePlan.Title')}
    >
      <Text>{t('Modal.EnterprisePlan.Message')}</Text>
      <HStack spacing={2} w="100%">
        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">
            <Icon as={PaperPlaneTilt} opacity={0.48} w="6" h="6" />
          </InputLeftElement>
          <Input
            flexShrink={1}
            isReadOnly
            value={Mails.SUPPORT}
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
        >
          {t(`common:${hasCopied ? 'Copied' : 'CopyEmail'}`)}
        </Button>
      </HStack>
      <ButtonGroup spacing="2" py="2">
        <Button
          colorScheme="blue"
          onClick={onClose}
          id="cancel-account-delete-button"
        >
          {t('Modal.Letter.CloseButton')}
        </Button>
        <Button as="a" href={`mailto:${Mails.SUPPORT}`} fontWeight="normal">
          {t('Modal.Letter.WriteButton')}
        </Button>
      </ButtonGroup>
    </ModalBlock>
  );
}

export default EnterprisePlanUpgradeModal;
