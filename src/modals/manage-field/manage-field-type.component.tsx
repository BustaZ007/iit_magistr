import { Box, Flex, FormLabel, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

type TManageFieldType = {
  type: string;
};

function ManageFieldType({ type }: TManageFieldType) {
  const { t } = useTranslation('components');

  return (
    <Flex alignItems="center" w="full">
      <FormLabel
        fontSize="sm"
        opacity={0.48}
        m={0}
        fontWeight="normal"
        minW={150}
        lineHeight={1}
      >
        {t('Modal.ManageField.Type.Title')}
      </FormLabel>
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
            noOfLines={1}
            wordBreak="break-all"
            lineHeight="base"
            pt={0.5}
          >
            {t(`Modal.ManageField.Type.${type}`)}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default ManageFieldType;
