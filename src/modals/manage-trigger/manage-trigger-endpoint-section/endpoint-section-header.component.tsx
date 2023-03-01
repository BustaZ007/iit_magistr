import { Heading, HStack, Icon, Spacer } from '@chakra-ui/react';
import { UserList } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import EndpointsSectionMenu from './endpoints-section-menu.component';
import { TEndpoint } from '../../../domains/endpoints';

type TEndpointSectionHeader = {
  handleAddEndpoint: (endpoint: TEndpoint) => void;
  menuEndpoints: TEndpoint[];
  loading: boolean;
};

function EndpointSectionHeader({
  handleAddEndpoint,
  menuEndpoints,
  loading,
}: TEndpointSectionHeader) {
  const { t } = useTranslation('components');
  return (
    <HStack spacing={3} w="full" py={2} px={6}>
      <Icon as={UserList} w="6" h="6" />
      <Heading
        fontSize="md"
        fontWeight="medium"
        noOfLines={1}
        wordBreak="break-all"
        py={1}
      >
        {t('Modal.ManageTrigger.Endpoints.Title')}
      </Heading>
      <Spacer />
      <EndpointsSectionMenu
        handleAddEndpoint={handleAddEndpoint}
        menuEndpoints={menuEndpoints}
        loading={loading}
      />
    </HStack>
  );
}

export default EndpointSectionHeader;
