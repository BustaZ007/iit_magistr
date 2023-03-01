import { NoContent } from '@3divi/shared-components';
import { Box, Grid, Progress, useToast } from '@chakra-ui/react';
import { FileDotted } from 'phosphor-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetSecurOsIntegration } from '../../../domains/sequr-os-integration';
import { CreateEntityButton } from '../../../elements';
import IntegrationTableHeader from './integration-table-header.component';
import { IntegrationTableRow } from './integration-table-row.component';

function IntegrationSettingsPage(): JSX.Element {
  const { t } = useTranslation('pages');
  // const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { data, error, loading } = useGetSecurOsIntegration();
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: t(`errors.${error.message}`),
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      });
    }
  }, [error]);

  return (
    <Box h="full" w="full" overflowY="auto">
      {/* Если нет данных после выполнения запроса, показываем сообщение + кнопку создания */}
      {!data.length && !loading && (
        <NoContent title={t('Settings.Integration.NoItems')} icon={FileDotted}>
          <CreateEntityButton
            text={t('components:Header.CreateButton.Integration')}
            entityTitle="integration"
          />
        </NoContent>
      )}

      {/* Если нет данных и выполняется запрос, отображаем прогресс бар и текстовку о загрузке данных */}
      {!data.length && loading && (
        <>
          <Progress size="xs" isIndeterminate />
          <NoContent title={t('common:LoadData')} icon={FileDotted} />
        </>
      )}

      {/* Если есть данные после запроса отображаем таблицу */}
      {data.length > 0 && !loading && (
        <Grid
          w="full"
          templateColumns="repeat(3, minmax(100px, 1fr)) max-content"
        >
          <>
            <IntegrationTableHeader />
            {data.map((integration) => (
              <IntegrationTableRow
                key={integration.id}
                integration={integration}
                // TODO Вернуть когда появится API удаления по множеству Ids
                // isChecked={selectedItems.some(
                //   (item) => item === integration.id
                // )}
                // setSelectedItems={setSelectedItems}
              />
            ))}
          </>
        </Grid>
      )}
    </Box>
  );
}

export default IntegrationSettingsPage;
