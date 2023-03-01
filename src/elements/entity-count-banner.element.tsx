import {
  Box,
  useColorModeValue,
  Stat,
  HStack,
  StatLabel,
  StatNumber,
  Spacer,
  Icon,
  StatHelpText,
  Tag,
} from '@chakra-ui/react';
import { IconProps } from 'phosphor-react';
import { Link } from 'react-router-dom';
import React from 'react';
import { formatNumber } from '@3divi/shared-components';

type TEntityCountBanner = {
  link: string;
  count: number;
  label: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  helpText?: string;
  tag?: string;
};

function EntityCountBanner({
  link,
  icon,
  count,
  label,
  helpText,
  tag,
}: TEntityCountBanner) {
  const bg = useColorModeValue('white', 'gray.700');
  const boxShadow = useColorModeValue('sm', 'sm-dark');

  return (
    <Box
      as={Link}
      to={link}
      _hover={{
        outline: '2px solid var(--chakra-colors-blue-200);',
      }}
      px="4"
      pt="3"
      pb="4"
      bg={bg}
      borderRadius="lg"
      boxShadow={boxShadow}
    >
      <Stat>
        <HStack spacing="2">
          <Icon as={icon} w="6" h="6" />
          <StatLabel fontSize="md" fontWeight="semibold">
            {label}
          </StatLabel>
        </HStack>
        <HStack spacing="2" pt="4" px="1" pb={helpText ? 2 : undefined}>
          <StatNumber
            noOfLines={1}
            wordBreak="break-all"
            fontSize="4xl"
            fontWeight="light"
            lineHeight="none"
          >
            {formatNumber(count)}
          </StatNumber>
          <Spacer />
          {!!tag && (
            <Tag flexShrink={0} colorScheme="red">
              {tag}
            </Tag>
          )}
        </HStack>
        {!!helpText && (
          <StatHelpText pb="1" px="1" fontSize="xs">
            {helpText}
          </StatHelpText>
        )}
      </Stat>
    </Box>
  );
}

export default EntityCountBanner;
