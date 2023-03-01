import { Box, FormControl, Select } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomFormLabel } from '../../elements';

type TCreateFieldSelect = {
  heading: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  elements: string[];
};

function CreateFieldSelect({
  heading,
  name,
  value,
  handleChange,
  elements,
}: TCreateFieldSelect) {
  const { t } = useTranslation('components');

  return (
    <FormControl
      maxW="max-content"
      display="flex"
      alignContent="flex-start"
      w="full"
    >
      <CustomFormLabel label={heading} py={2} />
      <Box>
        <Select
          name={name}
          value={value}
          onChange={handleChange}
          size="sm"
          borderRadius="md"
          w="full"
        >
          {elements.map((element) => (
            <option value={element} key={element}>
              {t(`Modal.CreateField.Type.${element}`)}
            </option>
          ))}
        </Select>
      </Box>
    </FormControl>
  );
}

export default CreateFieldSelect;
