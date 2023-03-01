import { isOnPremise } from '@3divi/shared-components';
import {
  BellRinging,
  CreditCard,
  Gear,
  HouseSimple,
  IconProps,
  UserFocus,
  Users,
} from 'phosphor-react';
import { PATHNAMES } from '..';

type TMenuItem = {
  title: string;
  to: string[];
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  exact?: boolean;
};

const MenuItems: TMenuItem[] = [];

MenuItems.push({
  title: 'Dashboard.Title',
  to: [PATHNAMES.dashboard],
  icon: HouseSimple,
  exact: true,
});

MenuItems.push({
  title: 'Notifications.Title',
  to: [PATHNAMES.notifications],
  icon: BellRinging,
});

MenuItems.push({
  title: 'Profiles.Title',
  to: [PATHNAMES.persons],
  icon: Users,
});

MenuItems.push({
  title: 'Activities.Title',
  to: [PATHNAMES.activities],
  icon: UserFocus,
});

if (!isOnPremise()) {
  MenuItems.push({
    title: 'Billing.Title',
    to: [PATHNAMES.billing],
    icon: CreditCard,
  });
}

MenuItems.push({
  title: 'Settings.Title',
  to: [
    PATHNAMES.settings_groups,
    PATHNAMES.settings_agents,
    PATHNAMES.settings_general,
    PATHNAMES.settings_triggers,
    PATHNAMES.settings_endpoints,
    PATHNAMES.settings_fields,
    PATHNAMES.settings_integration,
  ],
  icon: Gear,
});

export default MenuItems;
