import { Box, Text } from '@chakra-ui/react';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { TableRow } from '../../../elements/table';
import { TIntegrationData } from '../../../domains/sequr-os-integration';
import { ManageIntegrationDrawer } from '../../../modals/integration';

type TProfilesTableRow = {
  integration: TIntegrationData;
  // setSelectedItems: (value: SetStateAction<string[]>) => void;
  // isChecked: boolean;
};

export function IntegrationTableRow({
  integration,
}: // setSelectedItems,
// isChecked,
TProfilesTableRow) {
  const { t } = useTranslation('pages');

  const getModals = (isOpen: boolean, onClose: () => void) =>
    isOpen ? (
      <ManageIntegrationDrawer
        isOpen={isOpen}
        onClose={onClose}
        integration={integration}
      />
    ) : undefined;

  return (
    <Box display="contents" role="group">
      {/* <TableRowCheckbox
        setSelectedItems={setSelectedItems}
        id={integration.id}
        isChecked={isChecked}
      /> */}
      <TableRow getModals={getModals}>
        <Text noOfLines={1} wordBreak="break-all">
          {t('Settings.Integration.Systems.SecurOS')}
        </Text>
        <Text noOfLines={1} wordBreak="break-all">
          {integration.login}
        </Text>
        <Text noOfLines={1} wordBreak="break-all">
          {integration.url}
        </Text>
        <Text noOfLines={1} wordBreak="break-all">
          {moment(integration.creationDate).format('HH:mm · D MMMM')}
        </Text>
      </TableRow>
    </Box>
  );
}
