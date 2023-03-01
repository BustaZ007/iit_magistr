import { Button } from '@chakra-ui/react';
import { Backspace } from 'phosphor-react';
import { useTranslation } from 'react-i18next';

type TClearFilterButton = {
  onClick: () => void;
};

function ClearFilterButton({ onClick }: TClearFilterButton) {
  const { t } = useTranslation('common');

  return (
    <Button
      size="sm"
      fontSize="sm"
      fontWeight="normal"
      opacity={0.48}
      rightIcon={<Backspace size={20} />}
      onClick={onClick}
      variant="link"
      color="gray.800"
    >
      {t('Clear')}
    </Button>
  );
}

export default ClearFilterButton;
