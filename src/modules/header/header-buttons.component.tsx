import { useTranslation } from 'react-i18next';
import { comparePathname, isOnPremise } from '@3divi/shared-components';
import { PATHNAMES } from '../../consts';
import { CreateEntityButton, PersonCreateButton } from '../../elements';

function HeaderButtons() {
  const { t } = useTranslation('components');

  return (
    <>
      {comparePathname(PATHNAMES.settings_fields) ? (
        <CreateEntityButton
          text={t('Header.CreateButton.ProfilesField')}
          entityTitle="profilesField"
        />
      ) : null}
      {comparePathname(PATHNAMES.persons) ? <PersonCreateButton /> : null}
      {comparePathname(PATHNAMES.settings_groups) ? (
        <CreateEntityButton
          text={t('Header.CreateButton.Group')}
          entityTitle="group"
        />
      ) : null}
      {comparePathname(PATHNAMES.settings_endpoints) ? (
        <CreateEntityButton
          text={t('Header.CreateButton.Endpoint')}
          entityTitle="endpoint"
        />
      ) : null}
      {!isOnPremise() && comparePathname(PATHNAMES.settings_agents) ? (
        <CreateEntityButton
          text={t('Header.CreateButton.agents')}
          entityTitle="agent"
        />
      ) : null}
      {comparePathname(PATHNAMES.settings_triggers) ? (
        <CreateEntityButton
          text={t('Header.CreateButton.Trigger')}
          entityTitle="trigger"
        />
      ) : null}
      {comparePathname(PATHNAMES.settings_integration) ? (
        <CreateEntityButton
          text={t('components:Header.CreateButton.Integration')}
          entityTitle="integration"
        />
      ) : null}
    </>
  );
}

export default HeaderButtons;
