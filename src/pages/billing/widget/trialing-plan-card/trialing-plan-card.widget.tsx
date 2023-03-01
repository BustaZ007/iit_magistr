import {
  Box,
  useColorModeValue,
  Text,
  Divider,
  Stack,
  Heading,
  List,
  ListItem,
  HStack,
  ListIcon,
} from '@chakra-ui/react';
import { CheckCircle } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

function TrialingPlanCard() {
  const { t } = useTranslation('pages');
  const boxBackground = useColorModeValue('white', 'gray.700');
  const textBackground = useColorModeValue('gray.50', 'gray.600');
  const boxShadow = useColorModeValue('sm', 'sm-dark');
  return (
    <Box
      bg={boxBackground}
      borderRadius="lg"
      boxShadow={boxShadow}
      w="100%"
      overflow="hidden"
    >
      <Text size="sm" px="6" py="1.5" textAlign="center" bg={textBackground}>
        {t('Billing.LicensePlan.Title')}
      </Text>
      <Divider />
      <Stack px="6" py="8" spacing={6}>
        <Box>
          <Heading size="md" textAlign="center">
            {t(`Billing.LicensePlan.Trialing`)}
          </Heading>
          <Text pt={2} textAlign="center" opacity={0.8}>
            {t(`Billing.LicensePlan.Subtitle.Basic`)}
          </Text>
        </Box>
        <Divider />
        <List spacing={2}>
          <ListItem>
            <HStack spacing={1}>
              <ListIcon as={CheckCircle} color="green.500" />
              <Text>{t('Billing.LicensePlan.FaceRecognition')}</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack spacing={1}>
              <ListIcon as={CheckCircle} color="green.500" />
              <Text>{t('Billing.LicensePlan.FaceAttributes')}</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack spacing={1}>
              <ListIcon as={CheckCircle} color="green.500" />
              <Text>{t('Billing.LicensePlan.ProfileLimit')}</Text>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack spacing={1}>
              <ListIcon as={CheckCircle} color="green.500" />
              <Text>{t('Billing.LicensePlan.AgentLimit')}</Text>
            </HStack>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
}

export default TrialingPlanCard;
