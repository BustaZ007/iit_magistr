import { Button, Heading, Icon, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { FileDotted } from 'phosphor-react';
import { useEffect } from 'react';
import { FormPageLayout } from '../../layouts';
import { FiltersSearchParamsNames, PATHNAMES } from '../../consts';
import { useWorkspace } from '../../domains/workspaces';

function NotFoundPage() {
  const [searchParams] = useSearchParams();
  const { setWorkspace } = useWorkspace();
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation('pages');

  useEffect(() => {
    const workaspaceId = searchParams.get(FiltersSearchParamsNames.WORKSPACE);
    if (workaspaceId) {
      setWorkspace(workaspaceId);
      navigate(PATHNAMES.dashboard);
    }
    if (location.pathname.includes('/dashboard/')) {
      navigate(PATHNAMES.dashboard);
    }
  }, []);

  return (
    <FormPageLayout>
      <VStack spacing={8} textAlign="center">
        <Icon as={FileDotted} w="12" h="12" />
        <Heading fontSize="4xl" fontWeight="normal">
          {t('NotFound.Title')}
        </Heading>
        <Button
          as={Link}
          to={PATHNAMES.dashboard}
          size="lg"
          colorScheme="blue"
          id="go-home-button-not-found"
        >
          {t('NotFound.Button')}
        </Button>
      </VStack>
    </FormPageLayout>
  );
}

export default NotFoundPage;
