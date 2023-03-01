import {
  Box,
  Divider,
  Flex,
  IconButton,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tryParseJSON } from '@3divi/shared-components';
import EndpointsTableTrigger from '../../../pages/settings/endpoints-settings/components/endpoints-table-trigger.components';
import { TEndpointMeta } from '../../../domains/endpoints';

type TEndpointSectionItem = {
  endpointId: string;
  meta: string;
  type: string;
  handleRemoveEndpoint: (endpointId: string) => void;
  loading: boolean;
};

function EndpointSectionItem({
  endpointId,
  meta,
  type,
  handleRemoveEndpoint,
  loading,
}: TEndpointSectionItem) {
  const { t } = useTranslation('pages');
  const redColor = useColorModeValue('red.500', 'red.400');
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const parsedMeta = tryParseJSON<TEndpointMeta>(meta);
  return (
    <Box>
      <Divider />
      <Flex
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        alignItems="center"
        justifyContent="flex-start"
        pl={2}
      >
        <EndpointsTableTrigger type={type} />
        <Flex w="full" py={1} alignItems="center" ml={4}>
          <Text noOfLines={1} wordBreak="break-all" maxW={40}>
            {parsedMeta?.url ||
              parsedMeta?.target_email ||
              t('Settings.Endpoints.Type.WebInterface')}
          </Text>
          <Spacer />
          <IconButton
            size="sm"
            icon={<Trash size={20} />}
            aria-label="remove-group"
            variant="ghost"
            colorScheme="red"
            color={redColor}
            onClick={() => handleRemoveEndpoint(endpointId)}
            transition="0.2s all"
            opacity={Number(hovered)}
            _disabled={{
              opacity: Number(hovered),
              cursor: 'not-allowed',
              color: 'gray.400',
            }}
            isDisabled={loading}
          />
        </Flex>
      </Flex>
    </Box>
  );
}

export default EndpointSectionItem;
