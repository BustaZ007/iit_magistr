import { As } from '@chakra-ui/react';
import { ReactNode } from 'react';

type TAsideElement = {
  title: string;
  icon: As<any>;
  content: ReactNode;
};

export type { TAsideElement };
