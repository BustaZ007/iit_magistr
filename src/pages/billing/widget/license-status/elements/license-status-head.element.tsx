import { Icon, HStack, useColorModeValue, Heading } from '@chakra-ui/react';
import {
  CheckCircle,
  CircleDashed,
  IconProps,
  Prohibit,
  WarningCircle,
} from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { TLicense } from '@3divi/shared-components';

type TLicenseStatusHead = {
  license: TLicense;
};

const LicenseStatusInfoArray: {
  [x: string]: {
    icon: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >;
    color: string;
    title: string;
  };
} = {
  active: { icon: CheckCircle, color: 'green', title: 'Active' },
  trialing: { icon: CircleDashed, color: 'black', title: 'Trialing' },
  canceled: { icon: Prohibit, color: 'red', title: 'Canceled' },
  unpaid: { icon: WarningCircle, color: 'red', title: 'UnPaid' },
};

function LicenseStatusHead({ license }: TLicenseStatusHead) {
  const { status, cancelAtPeriodEnd } = license;
  const { t } = useTranslation('pages');
  let licenseInfo = LicenseStatusInfoArray[status];
  if (cancelAtPeriodEnd && status !== 'trialing') {
    licenseInfo = LicenseStatusInfoArray.canceled;
  }
  return (
    <HStack spacing="3" px="6" py="4">
      <Icon
        as={licenseInfo?.icon ?? CheckCircle}
        color={useColorModeValue(
          `${licenseInfo?.color ?? 'green'}.500`,
          `${licenseInfo?.color ?? 'green'}.400`
        )}
        w="7"
        h="7"
      />
      <Heading fontSize="lg" fontWeight="medium">
        {t(`Billing.Status.${licenseInfo?.title ?? 'Active'}`)}
      </Heading>
    </HStack>
  );
}

export default LicenseStatusHead;
