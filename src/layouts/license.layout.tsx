import {
  GET_LICENSE_INFORMATION,
  useCustomQuery,
  TLicenseInformation,
  useLicense,
  licenseVar,
  workspaceVar,
} from '@3divi/shared-components';
import { useReactiveVar } from '@apollo/client';
import { Outlet } from 'react-router-dom';

function LicenseLayout() {
  const { isLicense, setLicense } = useLicense(licenseVar);
  const workspaceId = useReactiveVar(workspaceVar);
  const onCompleted = (data: TLicenseInformation) => {
    if (data && data.licenses[0]) {
      setLicense(data.licenses[0].id);
    }
  };

  useCustomQuery<TLicenseInformation>(GET_LICENSE_INFORMATION, {
    variables: {
      workspaceId,
    },
    onCompleted,
  });

  if (!isLicense) return null;

  return <Outlet />;
}

export default LicenseLayout;
