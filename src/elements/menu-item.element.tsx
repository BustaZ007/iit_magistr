import {
  As,
  Box,
  Flex,
  HStack,
  Icon,
  Show,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { formatNumber } from '@3divi/shared-components';

type TMenuItemElement = {
  title: string;
  to: string;
  icon: As<any>;
  active: boolean;
  count?: number;
};

function MenuItemElement({ icon, title, to, active, count }: TMenuItemElement) {
  const { t } = useTranslation('pages');

  return (
    <Box
      as={Link}
      to={to}
      w="100%"
      px={{ base: '2.5', lg: '2' }}
      py="2"
      borderRadius="lg"
      bg={active ? 'gray.700' : 'transparent'}
      _hover={{
        bg: active ? 'gray.600' : 'gray.700',
      }}
    >
      <HStack spacing={2.5}>
        <Icon
          as={icon}
          w="6"
          h="6"
          color="white"
          opacity={active ? '1' : '0.48'}
        />
        <Show above="lg">
          {count ? (
            <Flex justifyContent="space-between" w="full">
              <Text color="white">{t(title)}</Text>
              <Tag
                size="sm"
                borderRadius="full"
                variant="solid"
                colorScheme="red"
              >
                <TagLabel>{formatNumber(count)}</TagLabel>
              </Tag>
            </Flex>
          ) : (
            <Text color="white">{t(title)}</Text>
          )}
        </Show>
      </HStack>
    </Box>
  );
}

export default MenuItemElement;
