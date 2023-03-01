/* eslint-disable react/jsx-props-no-spreading */
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import { Box, Grid, Progress, useColorModeValue } from '@chakra-ui/react';
import { FileDotted, IconProps } from 'phosphor-react';
import { TPaginationResults } from '@3divi/shared-components';
import { Pagination } from '../modules';
import { NoContentWithFilters } from './index';

type TTable = {
  templateColumns: string | undefined;
  header: ReactNode | ReactNode[];
  body: ReactNode | ReactNode[];
  loading: boolean;
  pagination: TPaginationResults | undefined;
  totalCount: number;
  noItemsTitle: string;
  noItemsTitleWithFilters: string;
  noItemsIcon?: ForwardRefExoticComponent<
    IconProps & RefAttributes<SVGSVGElement>
  >;
  buttons?: ReactNode | ReactNode[];
  noItemsComponents?: ReactNode | ReactNode[];
  gap?: number;
  updatesCounter?: ReactNode;
  [x: string]: any;
};

function Page({
  templateColumns,
  body,
  header,
  loading,
  noItemsIcon,
  noItemsTitle,
  noItemsTitleWithFilters,
  pagination,
  totalCount,
  buttons,
  noItemsComponents,
  gap,
  updatesCounter,
  ...rest
}: TTable) {
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  const paginationComponent = pagination ? (
    <Pagination
      page={pagination.page}
      setPage={pagination.setPage}
      totalCount={totalCount}
      limit={pagination.limit}
      maxPaginationButton={5}
    />
  ) : null;

  return (
    <Box h="full" w="full" overflowY="auto">
      {buttons}
      <Grid
        display={templateColumns ? 'grid' : 'block'}
        templateColumns={templateColumns}
        gap={gap}
        borderTop={buttons ? '1px' : undefined}
        borderColor={borderColor}
        {...rest}
      >
        {header || null}
        {updatesCounter}
        {totalCount > 0 && !loading && body}
      </Grid>
      {loading || totalCount === 0 ? (
        <>
          {loading && <Progress size="xs" isIndeterminate />}
          <NoContentWithFilters
            loading={loading}
            icon={noItemsIcon ?? FileDotted}
            title={noItemsTitle}
            titleWithFilters={noItemsTitleWithFilters}
          >
            {noItemsComponents}
          </NoContentWithFilters>
        </>
      ) : (
        paginationComponent
      )}
    </Box>
  );
}
export default Page;
