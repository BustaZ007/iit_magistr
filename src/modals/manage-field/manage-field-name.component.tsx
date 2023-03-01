import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { CustomFormLabel } from '../../elements';

type TManageFieldName = {
  name: string;
};

function ManageFieldName({ name }: TManageFieldName) {
  const { t } = useTranslation('components');

  return (
    <Flex alignItems="center" w="full">
      <CustomFormLabel label={t('Modal.ManageField.Name')} />
      <Box flexGrow={1} flexShrink={1}>
        <Box
          minH={8}
          py={1}
          px={3}
          borderRadius="md"
          minW={120}
          w="fit-content"
        >
          <Text
            pl="px"
            fontSize="sm"
            maxW={60}
            lineHeight="base"
            pt={0.5}
            noOfLines={1}
            wordBreak="break-all"
          >
            {name}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default ManageFieldName;
