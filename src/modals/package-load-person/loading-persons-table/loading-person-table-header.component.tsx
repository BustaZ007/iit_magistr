import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const LoadingPersonsTitles = ['Photo', 'Status', 'Details'];
function LoadingPersonsTableHeader(): JSX.Element {
  const { t } = useTranslation('components');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const color = useColorModeValue('gray.400', 'gray.500');

  return (
    <>
      {LoadingPersonsTitles.map((title: string) => (
        <Flex
          alignItems="center"
          pl="6"
          py="2"
          _last={{
            pr: 6,
          }}
          borderBottom="1px"
          borderColor={borderColor}
          key={title}
        >
          <Text
            letterSpacing="1px"
            fontSize="xs"
            color={color}
            fontWeight="medium"
            textTransform="uppercase"
          >
            {t(`LoadingProfileTable.${title}`)}
          </Text>
        </Flex>
      ))}
    </>
  );
}

export default LoadingPersonsTableHeader;
