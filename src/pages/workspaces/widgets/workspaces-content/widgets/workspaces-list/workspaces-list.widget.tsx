import { Box, Grid, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { WorkspaceItem } from '..';
import { TWorkspace } from '../../../../../../domains/workspaces';

type TWorkspacesList = {
  workspaces: TWorkspace[];
};

function WorkspacesList({ workspaces }: TWorkspacesList) {
  const borderColor = useColorModeValue('gray.100', 'whiteAlpha.200');
  const { t } = useTranslation('pages');
  return (
    <Grid templateColumns="max-content minmax(100px, 1fr)">
      <Box
        alignItems="center"
        pl="6"
        py="2"
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Text
          letterSpacing="1px"
          fontSize="xs"
          opacity={0.48}
          fontWeight="medium"
          textTransform="uppercase"
        >
          {t('Agents.AgentInfo.Status')}
        </Text>
      </Box>
      <Box
        pl="6"
        alignItems="center"
        py="2"
        borderBottom="1px"
        borderColor={borderColor}
      >
        <Text
          letterSpacing="1px"
          fontSize="xs"
          opacity={0.48}
          fontWeight="medium"
          textTransform="uppercase"
        >
          {t('Agents.AgentInfo.Name')}
        </Text>
      </Box>
      {workspaces.map(({ id, title, active }) => (
        <WorkspaceItem key={id} id={id} title={title} active={active} />
      ))}
    </Grid>
  );
}

export default WorkspacesList;
