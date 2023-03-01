/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Flex,
  useColorModeValue,
  useRadioGroup,
  Wrap,
} from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ColorButton, ColorRound, CustomFormLabel } from '../../elements';
import { useGetEditableControls } from '../../hooks';
import { GROUP_COLORS, TModifyGroupData } from '../../domains/group';

type TManageGroupColors = {
  groupColor: string;
  setColor: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<TModifyGroupData>>;
  onChangeColors: (e: ChangeEvent<HTMLInputElement>) => void;
};

function ManageGroupColors({
  groupColor,
  setColor,
  onChangeColors,
}: TManageGroupColors) {
  const { isEditing, getEditButtonProps, handleClick } =
    useGetEditableControls();
  const { t } = useTranslation('components');
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'groupColor',
    value: groupColor,
  });
  const bg = useColorModeValue('gray.100', 'gray.600');
  const groupColors = getRootProps();

  const handleColorPick = (color: string) => () => {
    setColor('groupColor', color);
  };

  return (
    <Flex alignItems="center" w="full">
      <CustomFormLabel label={t('Groups.Color')} />

      <Box flexGrow={1} flexShrink={1}>
        {!isEditing ? (
          <Box
            {...getEditButtonProps()}
            minH={8}
            pl={3}
            pt={1}
            cursor="pointer"
            _hover={{ bg }}
            borderRadius="md"
            minW={120}
            w="fit-content"
            onClick={handleClick}
          >
            <ColorRound color={groupColor} size={6} />
          </Box>
        ) : (
          <Wrap {...groupColors} onChange={onChangeColors} maxW={452}>
            {GROUP_COLORS.map(({ name, color }) => {
              const props = getRadioProps({ value: color });
              return (
                <ColorButton
                  key={name + color}
                  radioProps={props}
                  color={color}
                  onClick={handleColorPick(color)}
                />
              );
            })}
          </Wrap>
        )}
      </Box>
    </Flex>
  );
}

export default ManageGroupColors;
