import { useColorModeValue, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { TableCell } from './index';

type TTableHeader = {
  titles: string[];
};

export function TableHeader({ titles }: TTableHeader) {
  const { t } = useTranslation('pages');
  const color = useColorModeValue('gray.400', 'gray.500');
  return (
    <>
      {titles.map((title, index) => (
        <TableCell
          key={`${title}${index * index}`}
          isHeaderCell
          isLast={index === titles.length - 1}
        >
          <Text
            letterSpacing="1px"
            fontSize="xs"
            color={color}
            fontWeight="medium"
            textTransform="uppercase"
            noOfLines={1}
            wordBreak="break-all"
          >
            {t(title)}
          </Text>
        </TableCell>
      ))}
    </>
  );
}
