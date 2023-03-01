import { getSmallUuid } from '@3divi/shared-components';
import {
  Button,
  Text,
  Tooltip,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type TShortUUIDLabel = {
  id: string;
};

function ShortUUIDLabel({ id }: TShortUUIDLabel): JSX.Element {
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const borderColor = useColorModeValue('gray.500', 'gray.400');
  const color = useColorModeValue('gray.500', 'gray.400');
  const { onCopy } = useClipboard(id);

  const handleClick = () => {
    onCopy();
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 1000);
  };

  return (
    <Tooltip label={t('Copied')} isOpen={isOpen}>
      <Button
        onClick={handleClick}
        border="1px"
        borderColor={borderColor}
        px={1.5}
        bg="inherit"
        h={6}
        fontWeight="normal"
        title={id}
      >
        <Text fontSize="sm" color={color}>{`# ${getSmallUuid(id)}`}</Text>
      </Button>
    </Tooltip>
  );
}

export default ShortUUIDLabel;
