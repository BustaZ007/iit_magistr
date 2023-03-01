/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Outlet,
} from 'react-router-dom';
import { isOnPremise } from '@3divi/shared-components';
import { PATHNAMES } from './consts';
import {
  RecoveryPage,
  RecoverySuccessPage,
  SignInPage,
  SignUpPage,
  EmailConfirmPage,
  RecoveryNewPage,
  RecoveryNewSuccessPage,
  EmailSuccessPage,
  WorkspacesPage,
  DashboardPage,
  NotFoundPage,
  ProfilesPage,
  NotificationsPage,
  BillingPage,
  SettingsPage,
  GroupsSettingsPage,
  AgentsSettingsPage,
  TriggersSettingsPage,
  EndpointsSettingsPage,
  FieldsSettingsPage,
  // GeneralSettingsPage,
} from './pages';

import {
  AuthenticatedLayout,
  NotAuthenticatedLayout,
  PageWithMenuLayout,
  PageLayout,
  LicenseLayout,
} from './layouts';
import ActivitiesPage from './pages/activities';
import { IntegrationSettingsPage } from './pages/settings';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<NotAuthenticatedLayout />}>
          <Route path={PATHNAMES.sign_in} element={<SignInPage />} />
          <Route path={PATHNAMES.sign_up} element={<SignUpPage />} />
          <Route path={PATHNAMES.recovery} element={<RecoveryPage />} />
          <Route
            path={PATHNAMES.recovery_success}
            element={<RecoverySuccessPage />}
          />
          <Route path={PATHNAMES.recovery_new} element={<RecoveryNewPage />} />
          <Route
            path={PATHNAMES.recovery_new_success}
            element={<RecoveryNewSuccessPage />}
          />
          <Route
            path={PATHNAMES.email_confirm}
            element={<EmailConfirmPage />}
          />
          <Route
            path={PATHNAMES.email_success}
            element={<EmailSuccessPage />}
          />
        </Route>
        <Route element={<AuthenticatedLayout />}>
          <Route element={<PageLayout />}>
            <Route path={PATHNAMES.workspaces} element={<WorkspacesPage />} />
          </Route>
          <Route element={<PageWithMenuLayout />}>
            <Route element={!isOnPremise() ? <LicenseLayout /> : <Outlet />}>
              {!isOnPremise() && (
                <Route path={PATHNAMES.billing} element={<BillingPage />} />
              )}
              <Route path={PATHNAMES.dashboard} element={<DashboardPage />} />
              <Route path={PATHNAMES.activities} element={<ActivitiesPage />} />
              <Route
                path={PATHNAMES.notifications}
                element={<NotificationsPage />}
              />
              <Route path={PATHNAMES.settings} element={<SettingsPage />}>
                <Route
                  path={PATHNAMES.settings_triggers}
                  element={<TriggersSettingsPage />}
                />
                <Route
                  path={PATHNAMES.settings_groups}
                  element={<GroupsSettingsPage />}
                />
                <Route
                  path={PATHNAMES.settings_agents}
                  element={<AgentsSettingsPage />}
                />
                <Route
                  path={PATHNAMES.settings_fields}
                  element={<FieldsSettingsPage />}
                />
                {/* Вернуть, когда будет агент с функционалом порогов для нотификаций и кластеризации активностей */}
                {/* <Route
                  path={PATHNAMES.settings_general}
                  element={<GeneralSettingsPage />}
                /> */}
                <Route
                  path={PATHNAMES.settings_endpoints}
                  element={<EndpointsSettingsPage />}
                />
                <Route
                  path={PATHNAMES.settings_integration}
                  element={<IntegrationSettingsPage />}
                />
              </Route>
              <Route path={PATHNAMES.persons} element={<ProfilesPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
