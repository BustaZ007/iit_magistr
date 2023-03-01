import {
  Alert,
  Icon,
  Text,
  AlertIcon,
  AlertTitle,
  ButtonGroup,
  Button,
  Menu,
  MenuButton,
  IconButton,
  Portal,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import moment from 'moment';
import {
  useLicenseOperations,
  LICENSES_STATUS,
  useGetLicenseInfo,
  workspaceVar,
} from '@3divi/shared-components';
import { CaretDown } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { PATHNAMES } from '../consts';
import { getComebackUrl } from '../helpers';

function LicenseAlert() {
  const { t } = useTranslation('components');
  const { license, billingInformation } = useGetLicenseInfo(
    workspaceVar(),
    true
  );
  const {
    attachCreditCard: attachCard,
    activateSubscription,
    payInvoice,
    operationsLoading,
  } = useLicenseOperations(getComebackUrl(PATHNAMES.billing));
  if (
    !license ||
    ((license.status === LICENSES_STATUS.active ||
      license.status === LICENSES_STATUS.pastDue) &&
      !license.cancelAtPeriodEnd) ||
    !billingInformation ||
    (billingInformation.isCardAttached &&
      license.status === LICENSES_STATUS.trialing)
  )
    return null;
  const { status, cancelAtPeriodEnd, nextInvoiceDate } = license;
  let alertVariant: 'error' | 'info' | 'warning' | 'success' | undefined =
    'warning';
  let statusKey = 'Trialing';

  const attachCreditCard = () => {
    attachCard(`${getComebackUrl(PATHNAMES.billing)}?success_attach_card=true`);
  };
  const expirationDays = moment(nextInvoiceDate).toNow(true);

  const handlerButtonClick = billingInformation.isCardAttached
    ? activateSubscription
    : attachCreditCard;
  if (
    status === LICENSES_STATUS.canceled ||
    status === LICENSES_STATUS.unpaid
  ) {
    alertVariant = 'error';
    statusKey = 'Unpaid';
  } else if (cancelAtPeriodEnd && status !== LICENSES_STATUS.trialing) {
    alertVariant = 'info';
    statusKey = 'Canceled';
  }

  return (
    <Alert status={alertVariant} py={1} flexShrink={0} justifyContent="center">
      <AlertIcon />
      <AlertTitle>
        {t(`LicenseAlert.Title.${statusKey}`)}
        <Text fontWeight="normal" display="inline" px={2}>
          {t(`LicenseAlert.Subtitle.${statusKey}`, { expirationDays })}
        </Text>
      </AlertTitle>
      {status === LICENSES_STATUS.unpaid ? (
        <ButtonGroup flexShrink={0} size="sm" colorScheme="blue" isAttached>
          <Button
            fontWeight="normal"
            onClick={payInvoice}
            isDisabled={operationsLoading}
          >
            {t('LicenseAlert.Button.Unpaid')}
          </Button>
          <Menu direction="rtl">
            <MenuButton
              isDisabled={operationsLoading}
              ml="px"
              as={IconButton}
              icon={<Icon as={CaretDown} w={5} h={5} />}
              fontWeight="normal"
            />
            <Portal>
              <MenuList>
                <MenuItem onClick={attachCreditCard}>
                  {t('LicenseAlert.ChangePaymentData')}
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </ButtonGroup>
      ) : (
        <Button
          size="sm"
          lineHeight={1}
          colorScheme={alertVariant === 'warning' ? 'yellow' : 'blue'}
          onClick={handlerButtonClick}
          isDisabled={operationsLoading}
        >
          {t(
            `LicenseAlert.Button.${
              billingInformation.isCardAttached ? 'Canceled' : 'Trialing'
            }`
          )}
        </Button>
      )}
    </Alert>
  );
}

export default LicenseAlert;
