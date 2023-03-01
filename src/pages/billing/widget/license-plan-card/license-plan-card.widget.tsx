import {
  Box,
  Text,
  useColorModeValue,
  Divider,
  Heading,
  List,
  ListItem,
  HStack,
  Stack,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import {
  LICENSES_STATUS,
  TLicense,
  TPlan,
  useLicenseOperations,
} from '@3divi/shared-components';
import { CheckCircle } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { PATHNAMES, PAYMENT_TYPE } from '../../../../consts';
import { getComebackUrl } from '../../../../helpers';

type TLicensePlanCard = {
  plan: TPlan;
  isBestPlan: boolean;
  license: TLicense;
  isCardAttached: boolean;
};

const PLAN_NAME: { [x: string]: string } = {
  PLATFORM_CLOUD_BASIC: 'Basic',
  PLATFORM_CLOUD_PRO: 'Professional',
};

function LicensePlanCard({
  plan,
  isBestPlan,
  isCardAttached,
  license,
}: TLicensePlanCard) {
  const { status, plan: currentPlan } = license;
  const { t } = useTranslation('pages');
  const boxBackground = useColorModeValue('white', 'gray.700');
  const bestChoiceBackground = useColorModeValue('yellow.400', 'yellow.200');
  const titleBackground = useColorModeValue('gray.50', 'gray.600');
  const boxShadow = useColorModeValue('sm', 'sm-dark');
  const {
    attachCreditCard: attachCard,
    upgradeSubscription,
    activateSubscription,
    operationsLoading,
  } = useLicenseOperations(getComebackUrl(PATHNAMES.billing));
  const attachCreditCard = () => {
    attachCard(
      `${getComebackUrl(
        PATHNAMES.billing
      )}?success_attach_card=true&upgrade_subscription=true`
    );
  };
  const planCost = (
    Number(
      plan.meterAttributes.filter(
        (attribute) => attribute.name === PAYMENT_TYPE.CHANNELS
      )[0]?.unitAmountDecimal ?? '0'
    ) / 100
  ).toFixed(2);
  const profilesCost = (
    Number(
      plan.meterAttributes.filter(
        (attribute) => attribute.name === PAYMENT_TYPE.PERSONS_IN_BASE
      )[0]?.unitAmountDecimal ?? '0'
    ) / 100
  ).toFixed(2);
  const isCurrentPlan =
    currentPlan.name === plan.name &&
    status !== LICENSES_STATUS.trialing &&
    status !== LICENSES_STATUS.canceled;
  let handleButtonClick = upgradeSubscription;
  if (!isCardAttached) {
    handleButtonClick = attachCreditCard;
  } else if (status === LICENSES_STATUS.canceled) {
    handleButtonClick = activateSubscription;
  }
  return (
    <Box
      bg={boxBackground}
      borderRadius="lg"
      boxShadow={boxShadow}
      w="100%"
      overflow="hidden"
    >
      {(isBestPlan || isCurrentPlan) && (
        <>
          <Text
            size="sm"
            px="6"
            py="1.5"
            textAlign="center"
            color={!isCurrentPlan ? 'gray.800' : undefined}
            bg={isCurrentPlan ? titleBackground : bestChoiceBackground}
          >
            {t(`Billing.LicensePlan.${isCurrentPlan ? 'Title' : 'BestChoice'}`)}
          </Text>
          <Divider />
        </>
      )}
      <Stack px="6" py="8" spacing={6}>
        <Box>
          <Heading size="md" textAlign="center">
            {t(`Billing.LicensePlan.${PLAN_NAME[plan.name] ?? 'Basic'}`)}
          </Heading>
          <Text pt={2} textAlign="center" opacity={0.8}>
            {t(`Billing.LicensePlan.Subtitle.Basic`)}
          </Text>
        </Box>
        <Box textAlign="center">
          <Box position="relative" display="inline-block">
            <Text
              fontSize="2xl"
              position="absolute"
              fontWeight="medium"
              sx={{ transform: 'translateX(-120%)' }}
            >
              $
            </Text>
            <Text fontSize="6xl" fontWeight="medium" lineHeight="none">
              {planCost}
            </Text>
          </Box>
          <Text pt="1" fontSize="sm" px="6" opacity={0.56}>
            {t('Billing.LicensePlan.PerDay')}
          </Text>
        </Box>
        {!isCurrentPlan && (
          <Button
            colorScheme={isBestPlan ? 'yellow' : undefined}
            fontWeight="normal"
            isDisabled={operationsLoading}
            onClick={handleButtonClick}
          >
            {t('Billing.LicensePlan.UpgradePlan')}
          </Button>
        )}
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
              <Text>
                {t('Billing.LicensePlan.ProfileUp', { profilesCost })}
              </Text>
            </HStack>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
}

export default LicensePlanCard;
