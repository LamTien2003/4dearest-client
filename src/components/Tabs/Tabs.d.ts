import { ReactNode } from "react";

export enum TabsVariant {
  Line = "line",
  Enclosed = "enclosed",
  EnclosedColored = "enclosed-colored",
  SoftRounded = "soft-rounded",
  SolidRounded = "solid-rounded",
  UnStyle = "unstyled",
}
export enum TabsSize {
  Small = "sm",
  Medium = "md",
  Large = "lg",
}
export enum TabsAlign {
  Start = "start",
  Center = "center",
  End = "end",
}

interface TabItem {
  label: ReactNode;
  content: ReactNode;
}

export interface TabsProps {
  variant?: TabsVariant;
  size?: TabsSize;
  align?: TabsAlign;
  fitted?: boolean;
  items: TabItem[];
}
