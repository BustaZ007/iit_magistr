import { Box, FormControl, Select } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomFormLabel } from '../../elements';

type TCreateEndpointSelect = {
  heading: string;
  name: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  elements: string[];
};

function CreateEndpointSelect({
  heading,
  name,
  value,
  handleChange,
  elements,
}: TCreateEndpointSelect) {
  const { t } = useTranslation('components');

  return (
    <FormControl
      maxW="max-content"
      display="flex"
      alignContent="flex-start"
      w="full"
    >
      <Box py={2}>
        <CustomFormLabel label={heading} htmlFor="trigger-name" />
      </Box>
      <Select
        name={name}
        value={value}
        onChange={handleChange}
        size="sm"
        borderRadius="md"
      >
        {elements.map((element) => (
          <option value={element} key={element}>
            {t(`Modal.ManageEndpoint.Type.${element}`)}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}

export default CreateEndpointSelect;
