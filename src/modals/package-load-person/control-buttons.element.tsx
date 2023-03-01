import { Icon, IconButton, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { ArrowsInSimple, ArrowsOutSimple, X } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type TControlButtons = {
  showDetails: boolean;
  changeShowStatus: () => void;
  clearFiles: () => void;
  loadingFilesCount: number;
};

function ControlButtons({
  showDetails,
  changeShowStatus,
  clearFiles,
  loadingFilesCount,
}: TControlButtons) {
  const { t } = useTranslation('components');
  const bg = useColorModeValue('white', 'gray.900');

  return (
    <>
      <Tooltip
        label={t(
          `LoadingProfileTable.${
            showDetails ? 'MinimizeIconTooltip' : 'ShowDetails'
          }`
        )}
        hasArrow
      >
        <IconButton
          bg={bg}
          rounded="md"
          icon={
            <Icon
              boxSize={5}
              as={showDetails ? ArrowsInSimple : ArrowsOutSimple}
            />
          }
          size="sm"
          onClick={changeShowStatus}
          aria-label="Minimize profile loading table"
        />
      </Tooltip>

      {loadingFilesCount === 0 && (
        <Tooltip label={t('common:Close')} hasArrow>
          <IconButton
            bg={bg}
            rounded="md"
            icon={<Icon as={X} boxSize={5} />}
            size="sm"
            onClick={clearFiles}
            aria-label="Close profile loading table"
          />
        </Tooltip>
      )}
    </>
  );
}

export default ControlButtons;
