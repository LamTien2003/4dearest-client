import { InputSize } from "@/components/Input/Input.d";

export interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  isValidate?: boolean;
  size?: InputSize;
  className?: string;
  onMaxValue?: (maxValue: number, value: number) => void;
  onMinValue?: (minValue: number, value: number) => void;
}
