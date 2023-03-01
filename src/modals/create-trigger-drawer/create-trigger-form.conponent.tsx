import { VStack } from '@chakra-ui/react';
import { FormikErrors } from 'formik';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TFormikOnChange } from '../../consts';
import CreateTriggerGroup from './create-trigger-group.element';
import CreateTriggerEndpointsList from './create-trigger-endpoints-list.component';
import { DrawerInput } from '../../elements/drawer';

type TTriggersValue = {
  id: string;
  title: string;
  profileGroupId: string;
  endpointsIds: never[];
};

type TTriggerFormikErrors = FormikErrors<TTriggersValue>;

type TCreateTriggerForm = {
  needGroup: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<TTriggerFormikErrors>;
  values: TTriggersValue;
  errors: TTriggerFormikErrors;
  handleChange: TFormikOnChange;
};

function CreateTriggerForm({
  needGroup,
  errors,
  values,
  setFieldValue,
  handleChange,
}: TCreateTriggerForm) {
  const { t } = useTranslation('components');
  const handleProfileGroupsChange = useCallback(
    (id: string) => {
      setFieldValue('profileGroupId', id);
    },
    [setFieldValue]
  );

  const handleEndpointsListChange = useCallback(
    (ids: string[]) => {
      setFieldValue('endpointsIds', ids);
    },
    [setFieldValue]
  );
  return (
    <VStack spacing={4} p={6} align="flex-start" boxSizing="content-box">
      <DrawerInput
        value={values.title}
        error={errors.title}
        onChange={handleChange}
        label={t('Groups.Name')}
        id="trigger-name"
        name="title"
        autoFocus
      />
      {needGroup && (
        <CreateTriggerGroup handleChange={handleProfileGroupsChange} />
      )}
      <CreateTriggerEndpointsList handleChange={handleEndpointsListChange} />
    </VStack>
  );
}

export default CreateTriggerForm;
