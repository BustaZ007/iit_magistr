import { useEditableControls } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function useGetEditableControls(isDisabled?: boolean) {
  const { isEditing, getEditButtonProps } = useEditableControls();
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const obj = getEditButtonProps();
    if (obj.onClick !== undefined) obj.onClick(e);
    setIsFocused(true);
  };

  useEffect(() => {
    if (!isEditing) setIsFocused(false);
  }, [isEditing]);

  return {
    isFocused,
    handleClick: isDisabled ? () => undefined : handleClick,
    getEditButtonProps: isDisabled ? () => undefined : getEditButtonProps,
    isEditing: isDisabled ? false : isEditing,
  };
}

export default useGetEditableControls;
