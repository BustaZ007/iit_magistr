import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthentification } from '../../hooks';
import { PATHNAMES } from '../../consts';

function NotAuthenticatedLayout() {
  const navigate = useNavigate();
  const { isAuthentificated } = useAuthentification();

  useEffect(() => {
    if (isAuthentificated) {
      navigate(PATHNAMES.dashboard, { replace: true });
    }
  }, [isAuthentificated]);

  if (isAuthentificated) {
    return null;
  }

  return <Outlet />;
}

export default NotAuthenticatedLayout;
