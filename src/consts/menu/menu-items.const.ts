import {
  BellRinging,
  HouseSimple,
  IconProps,
  UserFocus,
  Users,
} from "phosphor-react";
import { PATHNAMES } from "..";

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
  title: "Dashboard.Title",
  to: [PATHNAMES.dashboard],
  icon: HouseSimple,
  exact: true,
});

MenuItems.push({
  title: "Notifications.Title",
  to: [PATHNAMES.dashboard],
  icon: BellRinging,
});

MenuItems.push({
  title: "Profiles.Title",
  to: [PATHNAMES.dashboard],
  icon: Users,
});

MenuItems.push({
  title: "Activities.Title",
  to: [PATHNAMES.dashboard],
  icon: UserFocus,
});

export default MenuItems;
