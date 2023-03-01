import { HStack, Spinner, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

function SpinnerLoader() {
  const { t } = useTranslation('common');
  return (
    <HStack
      spacing={2}
      justifyContent="flex-end"
      py={2}
      px={4}
      position="absolute"
      right={0}
      top="5px"
    >
      <Spinner size="md" />
      <Text userSelect="none">{t('Updating')}</Text>
    </HStack>
  );
}

export default SpinnerLoader;
