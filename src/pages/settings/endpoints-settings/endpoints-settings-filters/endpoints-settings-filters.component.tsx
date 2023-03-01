import { useTranslation } from 'react-i18next';
import { FiltersBlock } from '../../../../blocks';
import { FiltersSearchParamsNames } from '../../../../consts';
import {
  EndpointIdFilter,
  FilterDatePicker,
  FilterInput,
  FilterSelect,
  RadioOrCheckboxFilters,
  TRadioOrCheckboxOption,
  TriggerIdFilter,
} from '../../../../elements';

function EndpointsSettingsFilters() {
  const { t } = useTranslation('components');
  const checkboxOptions: TRadioOrCheckboxOption[] = [
    {
      value: 'WebInterface',
      label: t(`Filters.WebInterface`),
    },
    {
      value: 'Email',
      label: t(`Filters.Email`),
    },
    {
      value: 'Webhook',
      label: t(`Filters.Webhook`),
    },
  ];
  const radioOptions: TRadioOrCheckboxOption[] = [
    {
      value: 'all',
      label: t(`Filters.all`),
    },
    {
      value: 'GET',
      label: t(`Filters.GET`),
    },
    {
      value: 'POST',
      label: t(`Filters.POST`),
    },
  ];
  return (
    <FiltersBlock>
      <FilterSelect
        title={FiltersSearchParamsNames.SORT}
        defaultValue="all"
        fields={[
          '-creation_date',
          'creation_date',
          '-last_modified',
          'last_modified',
          '-type',
          'type',
          '-meta__method',
          'meta__method',
          '-meta__url',
          'meta__url',
          '-meta__target_email',
          'meta__target_email',
        ]}
        label={t('Filters.Sort')}
      />
      <RadioOrCheckboxFilters
        label={t('Filters.Type')}
        options={checkboxOptions}
        id={FiltersSearchParamsNames.TYPE}
        type="checkbox"
      />
      <RadioOrCheckboxFilters
        id={FiltersSearchParamsNames.METHOD}
        label={t('Filters.Method')}
        options={radioOptions}
      />
      <FilterInput id={FiltersSearchParamsNames.URL} label={t('Filters.URL')} />
      <FilterInput
        id={FiltersSearchParamsNames.EMAIL}
        label={t('Filters.Email')}
      />
      <EndpointIdFilter />
      <TriggerIdFilter />
      <FilterDatePicker label={t('Filters.CreationDate')} type="creation" />
      <FilterDatePicker label={t('Filters.ModifyDate')} type="modify" />
    </FiltersBlock>
  );
}

export default EndpointsSettingsFilters;
