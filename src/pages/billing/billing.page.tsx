import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import {
  LICENSES_STATUS,
  useGetLicenseInfo,
  useLicenseOperations,
  workspaceVar,
} from '@3divi/shared-components';
import LicensePlanCard from './widget/license-plan-card/license-plan-card.widget';
import LicenseStatus from './widget/license-status/license-status.element';
import OnPremiseCard from './widget/on-premise-card/on-premise-card.widget';
import TrialingPlanCard from './widget/trialing-plan-card/trialing-plan-card.widget';
import { FiltersSearchParamsNames, PATHNAMES } from '../../consts';
import { getComebackUrl } from '../../helpers';

const BEST_PLAN_NAME = 'PLATFORM_CLOUD_BASIC';

export function BillingPage() {
  const { t } = useTranslation('pages');
  const pageBackground = useColorModeValue('gray.100', 'transparent');
  const { billingInformation, license, plans } = useGetLicenseInfo(
    workspaceVar()
  );
  const { upgradeSubscription, activateSubscription } = useLicenseOperations(
    getComebackUrl(PATHNAMES.billing)
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const toast = useToast();

  useEffect(() => {
    if (searchParams.get(FiltersSearchParamsNames.SUCCESS_ATTACH_CARD)) {
      const successAttachCardStatus = searchParams.get(
        FiltersSearchParamsNames.SUCCESS_ATTACH_CARD
      );
      const shouldUpgradeSubscription = searchParams.get(
        FiltersSearchParamsNames.UPGRADE_SUBSCRIPTION
      );
      const shouldActivateSubscription = searchParams.get(
        FiltersSearchParamsNames.ACTIVATE_SUBSCRIPTION
      );

      let title = t('Billing.AttachCreditCard.Error');
      let status: 'info' | 'warning' | 'success' | 'error' | undefined =
        'error';
      if (successAttachCardStatus === 'true') {
        title = t('Billing.AttachCreditCard.Success');
        status = 'success';
      }

      if (shouldUpgradeSubscription === 'true') {
        upgradeSubscription();
      }
      if (shouldActivateSubscription === 'true') {
        activateSubscription();
      }

      toast({
        title,
        position: 'top',
        status,
        duration: 3000,
        isClosable: true,
      });
      searchParams.delete(FiltersSearchParamsNames.UPGRADE_SUBSCRIPTION);
      searchParams.delete(FiltersSearchParamsNames.SUCCESS_ATTACH_CARD);
      searchParams.delete(FiltersSearchParamsNames.ACTIVATE_SUBSCRIPTION);
      setSearchParams(searchParams);
    }
  }, [searchParams]);

  if (!billingInformation || !license) return null;
  const { status } = license;
  return (
    <Box h="100%" w="100%" overflowY="auto" bg={pageBackground}>
      <Box as="section" py={{ base: '4', md: '8' }}>
        <Container maxW="container.lg">
          <Stack spacing={8}>
            {status !== LICENSES_STATUS.trialing ? (
              <LicenseStatus
                billingInfo={billingInformation}
                license={license}
              />
            ) : (
              <SimpleGrid columns={3} spacing={8} alignItems="flex-start">
                {status === LICENSES_STATUS.trialing && <TrialingPlanCard />}
                {plans.map((plan) => (
                  <LicensePlanCard
                    key={plan.id}
                    plan={plan}
                    license={license}
                    isBestPlan={plan.name === BEST_PLAN_NAME}
                    isCardAttached={billingInformation.isCardAttached}
                  />
                ))}
                <OnPremiseCard />
              </SimpleGrid>
            )}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
