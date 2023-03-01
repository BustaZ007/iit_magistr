import { Box, Flex, useCheckboxGroup, Wrap } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { GROUP_COLORS } from '../../../../domains/group';
import {
  ClearFilterButton,
  ColorButton,
  CustomFormLabel,
} from '../../../../elements';
import { useFilterByArray } from '../../../../hooks';

function GroupColors() {
  const { t } = useTranslation('pages');
  const {
    value: selectedColors,
    handleSetValue,
    onClickClearButtonHandler,
  } = useFilterByArray({ title: 'color', delay: 500 });
  const { getCheckboxProps } = useCheckboxGroup({
    value: selectedColors,
    onChange: handleSetValue,
  });

  return (
    <Box>
      <Flex align="center" justifyContent="space-between" mb={1.5}>
        <CustomFormLabel
          htmlFor="colorTitle"
          label={t('Settings.Aside.Filters.Groups.ColorTitle')}
        />
        {selectedColors.length > 0 && (
          <ClearFilterButton onClick={onClickClearButtonHandler} />
        )}
      </Flex>
      <Wrap id="colorTitle" pt={1}>
        {GROUP_COLORS.map(({ name, color }) => {
          const props = getCheckboxProps({ value: color, name: 'color' });
          return (
            <ColorButton
              key={name + color}
              radioProps={props}
              color={color}
              isCheckbox
            />
          );
        })}
      </Wrap>
    </Box>
  );
}

export default GroupColors;
