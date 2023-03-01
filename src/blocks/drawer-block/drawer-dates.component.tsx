import { Box, Divider, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import moment from 'moment';
import { Info } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type TDrawerBlockDates = {
  creationDate: string | undefined;
  lastModify: string | undefined;
};

function DrawerBlockDates({ creationDate, lastModify }: TDrawerBlockDates) {
  const { t } = useTranslation('components');

  return (
    <>
      <HStack spacing={3} w="full" py={2} px={6}>
        <Icon as={Info} w="6" h="6" />
        <Heading
          fontSize="md"
          fontWeight="medium"
          noOfLines={1}
          wordBreak="break-all"
          py={1}
        >
          {t('Modal.DrawerBlock.Metadata')}
        </Heading>
      </HStack>
      <Box pl={7}>
        <Divider />
        <Text opacity={0.48} fontSize="sm" pl={1} pt={1}>
          {t('Modal.DrawerBlock.CreationDate')}
        </Text>
        <Text pl={1} pb={1}>
          {creationDate ? moment(creationDate).format('DD MMMM YYYY') : '—'}
        </Text>
      </Box>
      <Box pl={7}>
        <Divider />
        <Text opacity={0.48} fontSize="sm" pl={1} pt={1}>
          {t('Modal.DrawerBlock.LastModify')}
        </Text>
        <Text pl={1} pb={1}>
          {lastModify ? moment(lastModify).format('DD MMMM YYYY') : '—'}
        </Text>
      </Box>
    </>
  );
}

export default DrawerBlockDates;
