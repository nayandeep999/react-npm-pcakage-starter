import { HTMLAttributes, ReactNode } from "react";

export interface AccordianContextType {
  selected: number[];
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
}

export interface AccordianProps {
  children: ReactNode;
  value?: number[]; // Optional value prop
  onChange?: (selected: number[]) => void;
  className?: string;
}

export interface AccordianItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  value: number; // Changed to a number
  trigger: string;
  className?: string;
}
