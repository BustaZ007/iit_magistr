/* eslint-disable react/jsx-props-no-spreading */
import { Box, FormControl, useRadioGroup, Wrap } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { useTranslation } from 'react-i18next';
import { TFormikOnChange } from '../../consts';
import { GROUP_COLORS, TModifyGroupData } from '../../domains/group';
import { ColorButton, CustomFormLabel } from '../../elements';

type TGroupColors = {
  groupColor: string;
  setColor: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<TModifyGroupData>>;
  onChangeColors: TFormikOnChange;
};

function GroupColors({
  groupColor,
  setColor,
  onChangeColors,
}: TGroupColors): JSX.Element {
  const { t } = useTranslation();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'groupColor',
    value: groupColor,
  });

  const groupColors = getRootProps();

  const handleColorPick = (color: string) => () => {
    setColor('groupColor', color);
  };

  return (
    <FormControl display="flex" alignContent="flex-start" w="full">
      <Box py={2}>
        <CustomFormLabel
          label={t('components:Groups.Color')}
          htmlFor="group-color"
        />
      </Box>

      <Box w={400}>
        <Wrap pt={1} {...groupColors} onChange={onChangeColors}>
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
      </Box>
    </FormControl>
  );
}

export default GroupColors;
