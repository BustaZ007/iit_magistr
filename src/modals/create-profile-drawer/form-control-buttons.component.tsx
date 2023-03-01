/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  ButtonGroup,
  Text,
  useEditableControls,
} from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

type TFormControlButtons = {
  handleResetForm: () => void;
};

function FormControlButtons({ handleResetForm }: TFormControlButtons) {
  const { t } = useTranslation('common');
  const { isEditing, getCancelButtonProps, getSubmitButtonProps } =
    useEditableControls();

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const obj = getCancelButtonProps();
    if (obj.onClick !== undefined) obj.onClick(e);
    handleResetForm();
  };

  return isEditing ? (
    <ButtonGroup pt={4} pl={112}>
      <Button
        size="sm"
        colorScheme="blue"
        type="submit"
        {...getSubmitButtonProps()}
      >
        <Text fontWeight="normal">{t('Save')}</Text>
      </Button>
      <Button
        size="sm"
        variant="ghost"
        {...getCancelButtonProps()}
        onClick={handleButtonClick}
      >
        <Text fontWeight="normal" color="GrayText">
          {t('Cancel')}
        </Text>
      </Button>
    </ButtonGroup>
  ) : null;
}

export default FormControlButtons;
