import { useTranslation } from 'react-i18next';
import { FiltersSearchParamsNames, FilterStatuses } from '../../../../consts';
import {
  RadioOrCheckboxFilters,
  TRadioOrCheckboxOption,
} from '../../../../elements';

function FiltersStatus() {
  const { t } = useTranslation('components');

  const options: TRadioOrCheckboxOption[] = [
    {
      value: FilterStatuses.all,
      label: t(`Filters.${FilterStatuses.all}`),
    },
    {
      value: FilterStatuses.active,
      label: t(`Filters.${FilterStatuses.active}`),
    },
    {
      value: FilterStatuses.stopped,
      label: t(`Filters.${FilterStatuses.stopped}`),
    },
    {
      value: FilterStatuses.inactive,
      label: t(`Filters.${FilterStatuses.inactive}`),
    },
  ];

  return (
    <RadioOrCheckboxFilters
      id={FiltersSearchParamsNames.AGENT_STATUS}
      label={t('pages:Settings.Aside.Agents.Status')}
      options={options}
    />
  );
}

export default FiltersStatus;
