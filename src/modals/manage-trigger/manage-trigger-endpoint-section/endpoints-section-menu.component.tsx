import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { debounce } from 'lodash';
import { Plus } from 'phosphor-react';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchInput, tryParseJSON } from '@3divi/shared-components';
import CreateEndpointModal from '../../create-endpoint-drawer';
import { TEndpoint, TEndpointMeta } from '../../../domains/endpoints';
import EndpointsTableTrigger from '../../../pages/settings/endpoints-settings/components/endpoints-table-trigger.components';

type TEndpointsSectionMenu = {
  handleAddEndpoint: (endpoint: TEndpoint) => void;
  menuEndpoints: TEndpoint[];
  loading: boolean;
};

function EndpointsSectionMenu({
  handleAddEndpoint,
  menuEndpoints,
  loading,
}: TEndpointsSectionMenu) {
  const { t } = useTranslation('components');
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [searchText, setSearchText] = useState('');
  const [filteredEndpoints, setFilteredEndpoints] =
    useState<TEndpoint[]>(menuEndpoints);

  const debouncedSetFilteredEndpoints = useMemo(
    () =>
      debounce(
        () =>
          setFilteredEndpoints(
            menuEndpoints.filter((endpoint) =>
              endpoint.meta.includes(searchText)
            )
          ),
        500
      ),
    [searchText, menuEndpoints]
  );

  useEffect(() => {
    debouncedSetFilteredEndpoints();
    if (!searchText) debouncedSetFilteredEndpoints.flush();
    return () => debouncedSetFilteredEndpoints.cancel();
  }, [searchText, menuEndpoints, debouncedSetFilteredEndpoints]);

  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton
          as={IconButton}
          size="sm"
          icon={<Plus weight="bold" />}
          aria-label="add-group"
          fontSize="lg"
          variant="solid"
          colorScheme="blue"
          borderRadius="md"
        />
        <MenuList maxH={80} overflowY="auto" w={64}>
          <SearchInput
            setSearchText={setSearchText}
            searchText={searchText}
            placeholder={t('Modal.ManageTrigger.Endpoints.SearchPlaceholder')}
          />
          {menuEndpoints.length === 0 && (
            <Text opacity={0.48} pl={4} pr={4} py={2} fontSize="md" w="full">
              {t('Modal.ManageTrigger.Endpoints.EmptyAdd')}
            </Text>
          )}
          {menuEndpoints.length !== 0 && filteredEndpoints.length === 0 && (
            <Text opacity={0.48} pl={4} pr={4} py={2} fontSize="md" w="full">
              {t('Modal.ManageTrigger.Endpoints.NotFound')}
            </Text>
          )}
          {filteredEndpoints.map((endpoint) => {
            const meta = tryParseJSON<TEndpointMeta>(endpoint.meta);
            return (
              <MenuItem
                isDisabled={loading}
                key={endpoint.id}
                value={endpoint.id}
                onClick={() => handleAddEndpoint(endpoint)}
                p={0}
                pl={4}
              >
                <HStack spacing={3} w="full" py={2}>
                  <EndpointsTableTrigger type={endpoint.type} />
                  <Text maxW={40} noOfLines={1} wordBreak="break-all">
                    {meta?.url ||
                      meta?.target_email ||
                      t('pages:Settings.Endpoints.Type.WebInterface')}
                  </Text>
                </HStack>
              </MenuItem>
            );
          })}
          <MenuItem
            isDisabled={loading}
            icon={<Plus size={16} weight="bold" />}
            pl={3.5}
            onClick={onOpen}
            iconSpacing={2.5}
          >
            {t('Modal.ManageTrigger.Endpoints.NewEndpoint')}
          </MenuItem>
        </MenuList>
      </Menu>
      <CreateEndpointModal
        isOpen={isOpen}
        onClose={onClose}
        callback={handleAddEndpoint}
      />
    </>
  );
}

export default EndpointsSectionMenu;
