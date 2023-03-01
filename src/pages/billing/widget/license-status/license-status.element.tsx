import { TLicense } from '@3divi/shared-components';
import {
  Box,
  Icon,
  Text,
  useColorModeValue,
  HStack,
  Divider,
  VStack,
  Flex,
} from '@chakra-ui/react';
import moment from 'moment';
import { CreditCard } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import LicenseButtons from './elements/license-buttons.element';
import LicenseStatusHead from './elements/license-status-head.element';

type TLicenseStatus = {
  license: TLicense;
  billingInfo: {
    email: string;
    isCardAttached: boolean;
  };
};

const PLAN_NAME: { [x: string]: string } = {
  PLATFORM_CLOUD_BASIC: 'Basic',
  PLATFORM_CLOUD_PRO: 'Professional',
};

function LicenseStatus({ license, billingInfo }: TLicenseStatus) {
  const { t } = useTranslation('pages');
  const billingBoxBackground = useColorModeValue('white', 'gray.700');
  const billingBoxBoxShadow = useColorModeValue('sm', 'sm-dark');
  const { isCardAttached } = billingInfo;
  const { plan, nextInvoiceDate, cancelAtPeriodEnd } = license;
  let paymentDateTitle = 'NextPayment';
  let dateOfPayment: string | undefined = nextInvoiceDate;
  if (-moment().diff(dateOfPayment) < 0) {
    dateOfPayment = undefined;
  } else if (cancelAtPeriodEnd) {
    paymentDateTitle = 'CancellationDay';
  }
  return (
    <Box
      bg={billingBoxBackground}
      borderRadius="lg"
      boxShadow={billingBoxBoxShadow}
      w="100%"
    >
      <LicenseStatusHead license={license} />
      <Divider />
      <VStack spacing="4" px="6" py="5">
        <Flex gap={12} w="full" justifyContent="space-between">
          <HStack spacing={12}>
            <Box flexShrink={0}>
              <Text fontSize="sm" opacity={0.56}>
                {t('Billing.Plan')}
              </Text>
              <Text fontSize="2xl" lineHeight="short">
                {t(`Billing.LicensePlan.${PLAN_NAME[plan.name] ?? 'Basic'}`)}
              </Text>
            </Box>
            <Box flexShrink={0}>
              <Text fontSize="sm" opacity={0.56}>
                {t(`Billing.Date.${paymentDateTitle}`)}
              </Text>
              <Text fontSize="2xl" lineHeight="short">
                {dateOfPayment ? moment(dateOfPayment).format('D MMMM') : '-'}
              </Text>
            </Box>
            <Box flexShrink={0}>
              <Text fontSize="sm" opacity={0.56}>
                {t('Billing.PaymentMethod')}
              </Text>
              <HStack>
                {isCardAttached && <Icon as={CreditCard} w={6} h={6} />}
                <Text fontSize="2xl" lineHeight="short">
                  {isCardAttached ? '****' : '-'}
                </Text>
              </HStack>
            </Box>
          </HStack>
          <LicenseButtons license={license} isCardAttached={isCardAttached} />
        </Flex>
      </VStack>
    </Box>
  );
}

export default LicenseStatus;
