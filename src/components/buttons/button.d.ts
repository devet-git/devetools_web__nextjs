import { ReactElement, ReactNode } from "react";

export interface IIconButton {
  icon: ReactElement;
  text?: string;
  title?: string;
  className?: string;
  onClick?: MouseEventhandle<HTMLButtonElement>;
  hidden?: boolean;
  iconRight?: true;
  disable?: boolean;
}
