import { Flex, useColorModeValue } from '@chakra-ui/react';
import { ReactNode } from 'react';

type TTableCell = {
  isHeaderCell?: boolean;
  isLast?: boolean;
  children: ReactNode | ReactNode[];
  isClickable?: boolean;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
};

export function TableCell({
  children,
  isHeaderCell,
  isLast,
  isClickable = true,
  pt,
  pr,
  pb,
  pl,
}: TTableCell) {
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const hoverBackground = useColorModeValue('gray.50', 'gray.700');
  const headerPadding = isHeaderCell ? 2 : 3;
  const lastPadding = isLast ? 6 : undefined;

  return (
    <Flex
      alignItems="center"
      pl={pl ?? 6}
      pt={pt ?? headerPadding}
      pb={pb ?? headerPadding}
      pr={pr ?? lastPadding}
      borderBottom="1px"
      borderColor={borderColor}
      cursor={isClickable ? 'pointer' : 'default'}
      _groupHover={
        !isHeaderCell && isClickable
          ? {
              bg: hoverBackground,
            }
          : undefined
      }
    >
      {children}
    </Flex>
  );
}
