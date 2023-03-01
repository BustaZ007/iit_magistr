import { useCustomQuery } from '@3divi/shared-components';
import { Icon, Divider, Heading, HStack, Box } from '@chakra-ui/react';
import { UserList } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { GET_TRIGGERS, TGetTriggers } from '../../domains/triggers';
import { TGroup } from '../../domains/group';
import ManageGroupTriggerItem from './manage-group-trigger-item.component';

type TProfileCardGroupsSection = {
  group?: TGroup;
};

function ManageGroupTriggerSection({ group }: TProfileCardGroupsSection) {
  const { t } = useTranslation('components');
  const { data } = useCustomQuery<TGetTriggers>(GET_TRIGGERS, {
    variables: {
      targetId: group?.id ?? '',
      withItems: true,
    },
  });
  const triggers = data?.items?.collectionItems ?? [];

  return (
    <>
      <HStack spacing={3} w="full" py={2} px={6}>
        <Icon as={UserList} w="6" h="6" />
        <Heading
          fontSize="md"
          fontWeight="medium"
          noOfLines={1}
          wordBreak="break-all"
          py={1}
        >
          {t('Modal.ManageGroup.Triggers.Title')}
        </Heading>
      </HStack>
      <Box pb={1} pl={7} overflowY="auto">
        {triggers.map((trigger) => (
          <ManageGroupTriggerItem key={trigger.id} trigger={trigger} />
        ))}
      </Box>
      <Divider />
    </>
  );
}

export default ManageGroupTriggerSection;
