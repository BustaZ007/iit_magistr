import { chakra } from '@chakra-ui/react';
import Textarea from 'react-textarea-autosize';

export const AutoResizeTextarea = chakra(Textarea, {
  baseStyle: {
    borderRadius: 'md',
    display: 'block',
    transition: '0.2s all',
    w: 'full',
    outline: '2px solid transparent',
    outlineOffset: '2px',
    _focus: {
      border: '1px solid #3182ce',
      boxShadow: '0 0 0 1px #3182ce',
    },
  },
});
