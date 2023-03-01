import {
  Box,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

type TThresholdSection = {
  thresholdScore: string;
  setThresholdScore: Dispatch<SetStateAction<string>>;
  title: string;
  marks: [number, number, number];
};

function ThresholdSection({
  thresholdScore,
  setThresholdScore,
  title,
  marks,
}: TThresholdSection) {
  return (
    <Box pb={4}>
      <Text fontSize="sm" opacity={0.48} mb={0} fontWeight="normal">
        {title}
      </Text>
      <HStack spacing={6}>
        <Slider
          w={60}
          id="slider"
          value={Number(thresholdScore ?? 0)}
          min={marks[0]}
          step={0.001}
          max={marks[2]}
          colorScheme="blue"
          onChange={(value: number) => setThresholdScore(value.toString())}
          focusThumbOnChange={false}
        >
          {marks.map((mark, index) => {
            const ml = index === marks.length - 1 ? -2 : -4;
            return (
              <SliderMark
                key={mark}
                value={mark}
                mt="1"
                ml={index === 0 ? 0 : ml}
                fontSize="sm"
              >
                {mark}
              </SliderMark>
            );
          })}
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <NumberInput
          size="sm"
          w={24}
          min={0}
          max={1}
          precision={3}
          step={0.001}
          value={thresholdScore}
          onChange={(value: string) => {
            setThresholdScore(value || '0');
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
    </Box>
  );
}

export default ThresholdSection;
