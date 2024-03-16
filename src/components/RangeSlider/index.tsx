import {
  RangeSlider as ChakraRangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

import { COLOR_PRIMARY_400 } from "@/constants/color";

import { RangeSliderOrientation, RangeSliderProps } from "./RangeSlider.d";

const RangeSlider = ({
  min,
  max,
  defaultValue,
  orientation = RangeSliderOrientation.Horizontal,
  step,
  onChange,
  onChangeEnd,
}: RangeSliderProps) => {
  return (
    <ChakraRangeSlider
      colorScheme="brand"
      min={min}
      max={max}
      defaultValue={defaultValue}
      orientation={orientation}
      step={step}
      onChangeEnd={onChangeEnd}
      onChange={onChange}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb
        bgColor="brand.300"
        _focus={{ boxShadow: `0 0 0 3px ${COLOR_PRIMARY_400}` }}
        boxSize={6}
        index={0}
      />
      <RangeSliderThumb
        bgColor="brand.300"
        _focus={{ boxShadow: `0 0 0 3px ${COLOR_PRIMARY_400}` }}
        boxSize={6}
        index={1}
      />
    </ChakraRangeSlider>
  );
};

export default RangeSlider;
