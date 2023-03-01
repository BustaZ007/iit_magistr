import { Flex, useColorModeValue, VStack } from '@chakra-ui/react';
import ProgressBar from './progress-bar.component';
import ControlButtonsElement from './control-buttons.element';

type TLoadProgress = {
  changeShowStatus: () => void;
  clearFiles: () => void;
  loadingFilesCount: number;
  failedFilesCount: number;
  successFilesCount: number;
};

function LoadProgress({
  loadingFilesCount,
  successFilesCount,
  failedFilesCount,
  clearFiles,
  changeShowStatus,
}: TLoadProgress): JSX.Element {
  const bg = useColorModeValue('white', 'gray.900');
  const borderBg = useColorModeValue('gray.400', 'gray.300');

  const currentValue = failedFilesCount + successFilesCount;
  const maxValue = loadingFilesCount + failedFilesCount + successFilesCount;

  return (
    <VStack>
      <Flex
        p={4}
        bg={bg}
        borderRadius="md"
        width="full"
        border="1px"
        borderColor={borderBg}
        alignItems="center"
        gap={2}
      >
        <ProgressBar maxValue={maxValue} currentValue={currentValue} />
        <ControlButtonsElement
          showDetails={false}
          changeShowStatus={changeShowStatus}
          clearFiles={clearFiles}
          loadingFilesCount={loadingFilesCount}
        />
      </Flex>
    </VStack>
  );
}

export default LoadProgress;
