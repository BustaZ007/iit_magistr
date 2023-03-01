import { Stack } from '@chakra-ui/react';
import ManageFieldName from './manage-field-name.component';
import ManageFieldType from './manage-field-type.component';

type TManageFieldForm = {
  name: string;
  type: string;
};

function ManageFieldForm({ name, type }: TManageFieldForm) {
  return (
    <Stack spacing={4}>
      <ManageFieldType type={type} />
      <ManageFieldName name={name} />
    </Stack>
  );
}

export default ManageFieldForm;
