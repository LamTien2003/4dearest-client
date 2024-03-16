export interface NavBarOption {
  title: string;
  href: string;
  children?: Omit<NavBarOption, "children">[];
}

export interface NavbarProps {
  menu: NavBarOption[];
}
