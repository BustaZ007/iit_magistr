import {
  useColorModeValue,
  Box,
  Text,
  Divider,
  Heading,
  Stack,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { EnterprisePlanUpgradeModal } from '../../../../modals';

function OnPremiseCard() {
  const { t } = useTranslation('pages');
  const bg = useColorModeValue('white', 'gray.700');
  const boxShadow = useColorModeValue('sm', 'sm-dark');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={bg}
      borderRadius="lg"
      boxShadow={boxShadow}
      w="100%"
      overflow="hidden"
    >
      <Text size="sm" px="6" py="1.5" textAlign="center">
        {t('Billing.OnPremise.Title')}
      </Text>
      <Divider />
      <Stack px="6" py="8" spacing={6}>
        <Box>
          <Heading size="md" textAlign="center">
            {t('Billing.OnPremise.Name')}
          </Heading>
          <Text pt={2} textAlign="center" opacity={0.8}>
            {t('Billing.OnPremise.Text')}
          </Text>
        </Box>
        <Button onClick={onOpen} fontWeight="normal">
          {t('Billing.OnPremise.WriteButton')}
        </Button>
      </Stack>
      <EnterprisePlanUpgradeModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default OnPremiseCard;
