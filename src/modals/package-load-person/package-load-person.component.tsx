import { Box, Flex, Grid, Portal, useColorModeValue } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import LoadingPersonsTableHeader from './loading-persons-table/loading-person-table-header.component';
import LoadingPersonTableRow from './loading-persons-table/loading-person-table-row.component';
import LoadProgress from './load-progress';
import ControlButtonsElement from './control-buttons.element';
import { usePackageLoadingPersonStatuses } from '../../domains/profiles';

function LoadingPersonsSection(): JSX.Element | null {
  const bg = useColorModeValue('white', 'gray.900');
  const borderBg = useColorModeValue('gray.400', 'gray.300');
  const [showDetails, setShowDetails] = useState<boolean>(true);
  const {
    successFilesCount,
    failedFilesCount,
    loadingFilesCount,
    files,
    filesCount,
    maxFileLoadIndex,
    addFileLoadingStatus,
    clearFiles,
  } = usePackageLoadingPersonStatuses({
    fileLimit: 25,
  });
  const changeShowStatus = useCallback(() => {
    setShowDetails((prevShowStatus) => !prevShowStatus);
  }, [setShowDetails]);

  useEffect(() => {
    if (filesCount === 0) {
      setShowDetails(true);
    }
  }, [filesCount]);

  if (filesCount === 0) {
    return null;
  }

  return (
    <Portal>
      <Box
        position="fixed"
        left={0}
        top={0}
        w={showDetails ? '100vw' : undefined}
        h={showDetails ? '100vh' : undefined}
        bg={showDetails ? 'blackAlpha.600' : undefined}
      >
        <Box
          position="fixed"
          top={showDetails ? '56px' : undefined}
          left={0}
          mx="auto"
          bottom={!showDetails ? 2 : undefined}
          right={showDetails ? 0 : undefined}
          px={2}
          minWidth={214}
          width="max-content"
        >
          <Box>
            {!showDetails && (
              <LoadProgress
                changeShowStatus={changeShowStatus}
                clearFiles={clearFiles}
                loadingFilesCount={loadingFilesCount}
                failedFilesCount={failedFilesCount}
                successFilesCount={successFilesCount}
              />
            )}
            <Box
              maxH={600}
              overflowY="auto"
              border="1px"
              borderColor={borderBg}
              borderRadius="md"
              display={!showDetails ? 'none' : undefined}
            >
              <Grid
                templateColumns="max-content max-content 1fr"
                p={4}
                w={400}
                bg={bg}
                alignItems="stretch"
              >
                <LoadingPersonsTableHeader />
                {files.map((file, index) => (
                  <LoadingPersonTableRow
                    key={file.name + file.type}
                    canFileLoad={index <= maxFileLoadIndex}
                    file={file}
                    addFileLoadingStatus={addFileLoadingStatus}
                  />
                ))}
                <Flex position="absolute" right={8}>
                  <ControlButtonsElement
                    showDetails
                    changeShowStatus={changeShowStatus}
                    clearFiles={clearFiles}
                    loadingFilesCount={loadingFilesCount}
                  />
                </Flex>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Portal>
  );
}

export default LoadingPersonsSection;
