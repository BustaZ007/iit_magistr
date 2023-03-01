import {
  Box,
  Heading,
  Icon,
  useColorModeValue,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CheckCircle, WarningCircle } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type TStatusModule = {
  agentsCount: number;
  activeAgentsCount: number;
};

export function StatusModule({
  agentsCount,
  activeAgentsCount,
}: TStatusModule) {
  const { t } = useTranslation('pages');
  const bg = useColorModeValue('white', 'gray.700');
  const boxShadow = useColorModeValue('sm', 'sm-dark');

  let color = 'green.400';
  let title: string = t('Dashboard.AllOkTitle');
  let message: string = t('Dashboard.AllOkMessage');
  if (activeAgentsCount === 0 || agentsCount === 0) {
    color = 'red.400';
    title = t('Dashboard.CheckAgentsTitle');
    message = t('Dashboard.CheckAgentsMessage');
  } else if (agentsCount > activeAgentsCount) {
    color = 'yellow.400';
    title = t('Dashboard.SomeProblemTitle');
    message = t('Dashboard.SomeProblemMessage');
  }
  return (
    <Box bg={bg} borderRadius="lg" boxShadow={boxShadow} w="100%">
      <Box p="12">
        <VStack spacing="3" textAlign="center">
          <Icon
            as={activeAgentsCount === 0 ? WarningCircle : CheckCircle}
            w="10"
            h="10"
            color={color}
          />
          <Heading fontWeight="semibold" size="md">
            {title}
          </Heading>
          <Text> {message}</Text>
        </VStack>
      </Box>
    </Box>
  );
}
