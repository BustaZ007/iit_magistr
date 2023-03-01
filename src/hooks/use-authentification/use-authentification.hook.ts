import Cookies from 'js-cookie';
import {
  authenticatedVar,
  licenseVar,
  useLicense,
} from '@3divi/shared-components';
import { useReactiveVar } from '@apollo/client';
import { useWorkspace } from '../../domains/workspaces';

type TUseAuthentification = {
  isAuthentificated: boolean;
  setAuthentificated: (status: boolean) => void;
};

function useAuthentification(): TUseAuthentification {
  const isAuthentificated = useReactiveVar(authenticatedVar);
  const { resetWorkspace } = useWorkspace();
  const { resetLicense } = useLicense(licenseVar);

  const setAuthentificated = (status: boolean): void => {
    if (!status) {
      Cookies.remove('user_status');
      resetWorkspace();
      resetLicense();
    }
    authenticatedVar(status);
  };

  return { isAuthentificated, setAuthentificated };
}

export default useAuthentification;
