import { FileDotted } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { VStack, Heading, Icon } from '@chakra-ui/react';

import { WorkspacesList } from './widgets';
import { FilterStatuses } from '../../../../consts';
import {
  TWorkspace,
  useFiltredWorkspaces,
} from '../../../../domains/workspaces';

type TWorkspacesContent = {
  workspaces: TWorkspace[];
};

function WorkspacesContent({ workspaces }: TWorkspacesContent) {
  const { t } = useTranslation('pages');
  const { title, filteredWorkspaces } = useFiltredWorkspaces(workspaces);

  if (title === FilterStatuses.all && !filteredWorkspaces.length) return null;

  if (!filteredWorkspaces.length)
    return (
      <VStack spacing={4} textAlign="center" py="8">
        <Icon as={FileDotted} w="10" h="10" />
        <Heading fontSize="2xl" fontWeight="normal">
          {t(`Workspaces.NoItems.${title}`)}
        </Heading>
      </VStack>
    );

  return <WorkspacesList workspaces={filteredWorkspaces} />;
}

export default WorkspacesContent;
