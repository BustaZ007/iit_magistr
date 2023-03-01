import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  MenuDivider,
  ButtonGroup,
  Icon,
  IconButton,
  Portal,
} from '@chakra-ui/react';
import { CaretDown } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import {
  LICENSES_STATUS,
  TLicense,
  useLicenseOperations,
} from '@3divi/shared-components';
import { PATHNAMES } from '../../../../../consts';
import { getComebackUrl } from '../../../../../helpers';

type TLicenseButtons = {
  license: TLicense;
  isCardAttached: boolean;
};

function LicenseButtons({ license, isCardAttached }: TLicenseButtons) {
  const { status, cancelAtPeriodEnd } = license;
  const { t } = useTranslation('pages');
  const {
    attachCreditCard: attachCard,
    activateSubscription,
    cancelSubscription,
    payInvoice,
    operationsLoading,
  } = useLicenseOperations(getComebackUrl(PATHNAMES.billing));
  const attachCreditCard = () => {
    attachCard(
      `${getComebackUrl(
        PATHNAMES.billing
      )}?success_attach_card=true&upgrade_subscription=${(
        !isCardAttached &&
        !(status === LICENSES_STATUS.canceled || cancelAtPeriodEnd)
      ).toString()}&activate_subscription=${(
        !isCardAttached &&
        (status === LICENSES_STATUS.canceled || cancelAtPeriodEnd)
      ).toString()}`
    );
  };
  if (!isCardAttached) {
    return (
      <Button
        fontWeight="normal"
        colorScheme="blue"
        flexShrink={0}
        onClick={attachCreditCard}
        isDisabled={operationsLoading}
      >
        {t('Billing.Buttons.FillPaymentMethod')}
      </Button>
    );
  }
  if (status === LICENSES_STATUS.canceled || cancelAtPeriodEnd) {
    return (
      <ButtonGroup
        flexShrink={0}
        colorScheme="blue"
        isAttached
        isDisabled={operationsLoading}
      >
        <Button fontWeight="normal" onClick={activateSubscription}>
          {t('Billing.Buttons.RenewSubscription')}
        </Button>
        <Menu>
          <MenuButton
            ml="px"
            as={IconButton}
            icon={<Icon as={CaretDown} w={5} h={5} />}
            fontWeight="normal"
          />
          <MenuList>
            <MenuItem onClick={attachCreditCard}>
              {t('Billing.Buttons.ChangePaymentMethod')}
            </MenuItem>
          </MenuList>
        </Menu>
      </ButtonGroup>
    );
  }

  if (status === LICENSES_STATUS.unpaid) {
    return (
      <ButtonGroup
        flexShrink={0}
        size="sm"
        colorScheme="blue"
        isAttached
        isDisabled={operationsLoading}
      >
        <Button fontWeight="normal" onClick={payInvoice}>
          {t('Billing.Buttons.RepeatPayment')}
        </Button>
        <Menu direction="rtl">
          <MenuButton
            ml="px"
            as={IconButton}
            icon={<Icon as={CaretDown} w={5} h={5} />}
            fontWeight="normal"
          />
          <Portal>
            <MenuList>
              <MenuItem onClick={attachCreditCard}>
                {t('Billing.Buttons.ChangePaymentMethod')}
              </MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </ButtonGroup>
    );
  }

  return (
    <ButtonGroup flexShrink={0} isAttached>
      <Menu direction="rtl">
        <MenuButton
          isDisabled={operationsLoading}
          ml="px"
          as={Button}
          fontWeight="normal"
        >
          {t('Billing.Buttons.Manage')}
        </MenuButton>
        <Portal>
          <MenuList>
            <MenuItem onClick={attachCreditCard}>
              {t('Billing.Buttons.ChangePaymentMethod')}
            </MenuItem>
            <MenuDivider />
            <MenuItem onClick={cancelSubscription}>
              {t('Billing.Buttons.StopSubscription')}
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </ButtonGroup>
  );
}

export default LicenseButtons;
