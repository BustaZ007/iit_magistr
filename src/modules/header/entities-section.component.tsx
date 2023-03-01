import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

function EntitiesSection() {
  const { t } = useTranslation('pages');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const bg = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex
      align="center"
      pl={{ base: 4, lg: 6 }}
      pr={4}
      py="2"
      bg={bg}
      w={{ base: '150px', lg: '200px' }}
      flexShrink={0}
      borderBottom="1px"
      borderColor={borderColor}
    >
      <Heading
        py="2"
        flexGrow={1}
        fontSize="lg"
        noOfLines={1}
        wordBreak="break-all"
        fontWeight="semibold"
        overflow="visible"
      >
        {t('Settings.Title')}
      </Heading>
    </Flex>
  );
}

export default EntitiesSection;
