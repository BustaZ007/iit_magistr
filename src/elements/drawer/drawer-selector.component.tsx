import { Box, FormControl, Select } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomFormLabel } from '..';

type TDrawerSelect = {
  htmlFor: string;
  label: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  elements: Array<{ title: string; locale: string }>;
};

function DrawerSelect({
  htmlFor,
  label,
  name,
  value,
  handleChange,
  elements,
}: TDrawerSelect) {
  const { t } = useTranslation('components');

  return (
    <FormControl
      maxW="max-content"
      display="flex"
      alignContent="flex-start"
      w="full"
    >
      <Box py={2}>
        <CustomFormLabel label={label} htmlFor={htmlFor} />
      </Box>

      <Select
        id={htmlFor}
        name={name}
        value={value}
        onChange={handleChange}
        size="sm"
        borderRadius="md"
        width="full"
      >
        {elements.map((element) => (
          <option value={element.title} key={element.locale}>
            {t(`${element.title}`)}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}

export { DrawerSelect };
