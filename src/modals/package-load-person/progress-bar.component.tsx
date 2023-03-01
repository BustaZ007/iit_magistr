import { Progress, useColorModeValue } from '@chakra-ui/react';

type TProgressBar = {
  maxValue?: number;
  currentValue?: number;
};

function ProgressBar({ maxValue, currentValue }: TProgressBar): JSX.Element {
  const progressBg = useColorModeValue('gray.200', 'gray.600');
  const isIndeterminate = maxValue === undefined || currentValue === undefined;

  return (
    <Progress
      w="full"
      borderRadius="md"
      bg={progressBg}
      size="md"
      max={maxValue}
      value={currentValue}
      isIndeterminate={isIndeterminate}
    />
  );
}

export default ProgressBar;
