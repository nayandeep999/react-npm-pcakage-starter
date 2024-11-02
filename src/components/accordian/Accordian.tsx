import { ChevronDown } from "lucide-react";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import {
  AccordianContextType,
  AccordianItemProps,
  AccordianProps,
} from "./types";

const AccordianContext = createContext<AccordianContextType | undefined>(
  undefined
);

// Accordion component
const Accordian: React.FC<AccordianProps> = ({ children, value, onChange }) => {
  const [selected, setSelected] = useState<number[]>(value || []);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <ul>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
};

// Define types for AccordionItem props

// AccordionItem component
export const AccordianItem: React.FC<AccordianItemProps> = ({
  children,
  value,
  trigger,
}) => {
  const context = useContext(AccordianContext);

  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  const { selected, setSelected } = context;
  const open = selected.includes(value);

  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (open) {
      // If the item is open, remove it from the selected array
      setSelected(selected.filter((item) => item !== value));
    } else {
      // If the item is closed, add it to the selected array
      setSelected([...selected, value]);
    }
  };

  return (
    <li className="border-b">
      <header
        role="button"
        onClick={handleToggle}
        className="flex justify-between items-center p-4 font-medium"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
};

export default Accordian;
