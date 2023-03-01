import { Box, useDisclosure } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { TableCell } from './index';

type TTableRow = {
  children: ReactNode[] | ReactNode;
  getModals?: (isOpen: boolean, onClose: () => void) => JSX.Element | undefined;
  isClickable?: boolean;
  onClick?: () => void;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
};

export function TableRow({
  children: cells,
  getModals,
  isClickable = true,
  onClick,
  pt,
  pr,
  pb,
  pl,
}: TTableRow) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleGroupClick = () => {
    onOpen();
    if (onClick) onClick();
  };
  return (
    <Box display="contents" role="group" onClick={handleGroupClick}>
      {Array.isArray(cells) ? (
        cells.map((cell, index) => (
          <TableCell
            key={`${cell?.toString() ?? ''} ${index * index}`}
            isLast={index === cells.length - 1}
            isClickable={isClickable}
            pt={pt}
            pr={pr}
            pb={pb}
            pl={pl}
          >
            {cell}
          </TableCell>
        ))
      ) : (
        <TableCell
          isLast
          isClickable={isClickable}
          pt={pt}
          pr={pr}
          pb={pb}
          pl={pl}
        >
          {cells}
        </TableCell>
      )}
      {getModals && getModals(isOpen, onClose)}
    </Box>
  );
}
