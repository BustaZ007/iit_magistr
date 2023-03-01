/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Box, useColorModeValue } from '@chakra-ui/react';

type TColorRound = {
  color?: string;
  size?: number;
};

function ColorRound({ size = 3, color = 'white' }: TColorRound) {
  const shadowColor = useColorModeValue(
    'hsl(0 0% 0% / 0.12)',
    'hsl(0 0% 100% / 0.12)'
  );

  return (
    <Box
      w={size}
      h={size}
      boxShadow={`inset 0px 0px 0px 1px ${shadowColor}`}
      borderRadius="full"
      backgroundColor={color}
      flexShrink={0}
    />
  );
}

export default ColorRound;
