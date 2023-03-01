import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorModeValue,
} from '@chakra-ui/react';
import { debounce } from 'lodash';
import { MagnifyingGlass } from 'phosphor-react';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { TGroup } from '../domains/group';

type TSearchGroupInput = {
  groups: TGroup[];
  setFilteredGroups: Dispatch<SetStateAction<TGroup[]>>;
};

function SearchGroupInput({ groups, setFilteredGroups }: TSearchGroupInput) {
  const { t } = useTranslation('pages');
  const [searchText, setSearchText] = useState<string>('');
  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300');

  const debouncedSetFilteredGroups = useMemo(
    () =>
      debounce(
        () =>
          setFilteredGroups(
            groups.filter((group) => group.title.includes(searchText))
          ),
        500
      ),
    [setFilteredGroups, groups, searchText]
  );

  useEffect(() => {
    debouncedSetFilteredGroups();
    if (!searchText) debouncedSetFilteredGroups.flush();
    return () => debouncedSetFilteredGroups.cancel();
  }, [searchText, groups, debouncedSetFilteredGroups]);

  return (
    <InputGroup size="md" mb={2}>
      <InputLeftElement pointerEvents="none" h="full" w={8}>
        <Icon as={MagnifyingGlass} w="4" h="4" />
      </InputLeftElement>
      <Input
        pl={7}
        autoComplete="off"
        borderRadius="md"
        size="sm"
        bg={bg}
        borderColor={borderColor}
        type="text"
        placeholder={t('Profiles.Filters.WatchLists.Search')}
        value={searchText}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
      />
    </InputGroup>
  );
}

export default SearchGroupInput;
