import { Box, Tag, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

import { PATHNAMES } from '../../../../../../consts';
import { useWorkspace } from '../../../../../../domains/workspaces';

type TWorkspaceItem = {
  id: string;
  title: string;
  active: boolean;
};

function WorkspaceItem({ id, title, active }: TWorkspaceItem) {
  const bg = useColorModeValue('gray.50', 'gray.700');
  const { setWorkspace } = useWorkspace();
  const borderColor = useColorModeValue('gray.100', 'whiteAlpha.200');
  const { t } = useTranslation('pages');
  const handleLinkClick = () => {
    setWorkspace(id);
  };

  return (
    <Box
      as={RouterLink}
      to={PATHNAMES.dashboard}
      display="contents"
      onClick={handleLinkClick}
      role="group"
      id="set-workspace-button"
    >
      <Box
        alignItems="center"
        pl="6"
        py="3"
        borderBottom="1px"
        borderColor={borderColor}
        _groupHover={{
          bg,
        }}
      >
        <Tag flexShrink={0} colorScheme={active ? 'green' : 'red'}>
          {active
            ? t('Workspaces.Status.Active')
            : t('Workspaces.Status.Stopped')}
        </Tag>
      </Box>
      <Box
        alignItems="center"
        px="6"
        py="3"
        borderBottom="1px"
        borderColor={borderColor}
        _groupHover={{
          bg,
        }}
      >
        <Text>{title}</Text>
      </Box>
    </Box>
  );
}

export default WorkspaceItem;
