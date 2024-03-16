export enum RangeSliderOrientation {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export interface RangeSliderProps {
  min: number;
  max: number;
  onChangeEnd: (value: [number, number]) => void;
  onChange?: (value: [number, number]) => void;
  step?: number;
  defaultValue?: [number, number];
  orientation?: RangeSliderOrientation;
}
