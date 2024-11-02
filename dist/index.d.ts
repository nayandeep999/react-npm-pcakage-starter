import React, { ReactNode, HTMLAttributes } from 'react';

interface AccordianProps {
    children: ReactNode;
    value?: number[];
    onChange?: (selected: number[]) => void;
    className?: string;
}
interface AccordianItemProps extends HTMLAttributes<HTMLLIElement> {
    children: ReactNode;
    value: number;
    trigger: string;
    className?: string;
}

declare const Accordian: React.FC<AccordianProps>;
declare const AccordianItem: React.FC<AccordianItemProps>;

export { Accordian, AccordianItem, type AccordianItemProps, type AccordianProps };
