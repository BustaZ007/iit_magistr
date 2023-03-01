import { useTranslation } from 'react-i18next';
import { FiltersBlock } from '../../../../blocks';
import { FilterByIds, FiltersName, PersonIdFilter } from '../../../../elements';
import GroupColors from './group-colors.component';

function GroupsSettingFilters(): JSX.Element {
  const { t } = useTranslation('pages');

  return (
    <FiltersBlock>
      <FilterByIds
        id="groupsIds"
        label={t('Settings.Aside.Filters.Groups.GroupIds')}
      />
      <FiltersName />
      <GroupColors />
      <PersonIdFilter />
    </FiltersBlock>
  );
}

export default GroupsSettingFilters;
