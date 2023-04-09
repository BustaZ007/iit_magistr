import { HouseSimple, IconProps } from "phosphor-react";
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
  title: "Домашняя",
  to: [PATHNAMES.dashboard],
  icon: HouseSimple,
  exact: true,
});
MenuItems.push({
  title: "TestPage",
  to: ["/test"],
  icon: HouseSimple,
  exact: true,
});

export default MenuItems;
