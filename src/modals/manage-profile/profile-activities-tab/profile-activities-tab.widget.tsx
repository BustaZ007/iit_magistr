/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Box, Progress } from '@chakra-ui/react';
import { PaginationLimits } from '../../../consts';
import { GET_ACTIVITIES, TActivitiesItem } from '../../../domains/activity';
import { useGetPaginatedItems } from '../../../hooks';
import { ActivitiesTable, Pagination } from '../../../modules';

type TActivitiesList = {
  profileId: string;
};

function ProfileActivitiesTab({ profileId }: TActivitiesList) {
  const {
    items: activities,
    pagination,
    totalCount,
    loading,
  } = useGetPaginatedItems<TActivitiesItem>(GET_ACTIVITIES, {
    order: { creationDate: 'DESC' },
    filter: { profileId },
    limit: PaginationLimits.ACTIVITIES,
  });

  if (activities?.length === 0) return null;

  return (
    <>
      {loading && <Progress size="xs" isIndeterminate />}
      <Box w="100%" overflowY="auto">
        <ActivitiesTable activities={activities ?? []} />
        <Pagination
          page={pagination.page}
          setPage={pagination.setPage}
          totalCount={totalCount}
          limit={30}
          maxPaginationButton={5}
        />
      </Box>
    </>
  );
}

export default ProfileActivitiesTab;
