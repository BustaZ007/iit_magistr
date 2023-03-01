import {
  Box,
  ButtonGroup,
  Icon,
  IconButton,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { Rows, SquaresFour } from 'phosphor-react';
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

type TChangeViewButtons = {
  name: string;
  currentView: string;
  setCurrentView: Dispatch<SetStateAction<string>>;
};

function ChangeViewButtons({
  name,
  currentView,
  setCurrentView,
}: TChangeViewButtons) {
  const { t } = useTranslation('components');
  const hoverBg = useColorModeValue('blue.50', 'rgba(144, 205, 244, 0.12)');
  const bg = useColorModeValue('blue.500', 'whiteAlpha.200');

  const handleChangeView: MouseEventHandler<HTMLButtonElement> = (e) => {
    if (currentView !== e.currentTarget.value) {
      localStorage.setItem(`${name}-content-view`, e.currentTarget.value);
      setCurrentView(e.currentTarget.value);
    }
  };

  return (
    <ButtonGroup spacing={0}>
      <Tooltip label={t('ChangeViewButtons.Table')} closeOnClick={false}>
        <Box>
          <IconButton
            minW={9}
            h={9}
            value="table"
            aria-label="table-view"
            icon={<Icon as={Rows} w={5} h={5} />}
            variant="ghost"
            onClick={handleChangeView}
            bg={currentView === 'table' ? bg : undefined}
            // Используется css вместо isDisabled и _disabled, так как не показывается тултип
            // при наведении с одной кнопки на другую
            css={
              currentView === 'table'
                ? { cursor: 'not-allowed', color: 'white' }
                : undefined
            }
            _hover={{ bg: currentView === 'table' ? undefined : hoverBg }}
            _active={{}}
          />
        </Box>
      </Tooltip>
      <Tooltip label={t('ChangeViewButtons.Tile')} closeOnClick={false}>
        <Box>
          <IconButton
            minW={9}
            h={9}
            value="tile"
            aria-label="tile-view"
            icon={<Icon as={SquaresFour} w={5} h={5} />}
            variant="ghost"
            onClick={handleChangeView}
            bg={currentView === 'tile' ? bg : undefined}
            // Используется css вместо isDisabled и _disabled, так как не показывается тултип
            // при наведении с одной кнопки на другую
            css={
              currentView === 'tile'
                ? { cursor: 'not-allowed', color: 'white' }
                : undefined
            }
            _hover={{ bg: currentView === 'tile' ? undefined : hoverBg }}
            _active={{}}
          />
        </Box>
      </Tooltip>
    </ButtonGroup>
  );
}

export default ChangeViewButtons;
