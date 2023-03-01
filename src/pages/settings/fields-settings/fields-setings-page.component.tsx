import { useTranslation } from 'react-i18next';
import { useGetProfilesFields } from '../../../domains/profiles';
import { CreateEntityButton, Page } from '../../../elements';
import { TableHeader } from '../../../elements/table';
import FieldItem from './field-item.component';
import { useGetCustomCamerasFields } from '../../../domains/agent';

const FieldsTableHeaderTitle = [
  'Settings.Fields.Table.Entity',
  'Settings.Fields.Table.Name',
];

function FieldsSettingsPage() {
  const { t } = useTranslation('pages');
  const { customFields: customProfilesFields, loading: profilesLoading } =
    useGetProfilesFields();
  const { customFields: customCamerasFields, loading: camerasLoading } =
    useGetCustomCamerasFields();

  const customFields = [
    ...customProfilesFields.map((field) => ({ name: field, type: 'profile' })),
    ...customCamerasFields.map((field) => ({ name: field, type: 'camera' })),
  ];

  return (
    <Page
      templateColumns="max-content auto"
      header={<TableHeader titles={FieldsTableHeaderTitle} />}
      totalCount={customFields.length}
      body={customFields.map((field) => (
        <FieldItem
          name={field.name}
          type={field.type}
          key={`${field.type}${field.name}`}
        />
      ))}
      pagination={undefined}
      loading={profilesLoading || camerasLoading}
      noItemsTitle={t('Settings.Fields.MissingFields')}
      noItemsTitleWithFilters={t('Settings.Fields.MissingFields')}
      noItemsComponents={
        <CreateEntityButton
          entityTitle="profilesField"
          text={t('components:Header.CreateButton.ProfilesField')}
        />
      }
    />
  );
}

export default FieldsSettingsPage;
