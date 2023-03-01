import { Box, Icon, Tooltip } from '@chakra-ui/react';
import { Detective } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

function AnonymousActivityIndicator() {
  const { t } = useTranslation('common');
  return (
    <Tooltip label={t('Anonymous')}>
      <Box p={2} h={9} w={9}>
        <Icon as={Detective} w={5} h={5} />
      </Box>
    </Tooltip>
  );
}

export default AnonymousActivityIndicator;
