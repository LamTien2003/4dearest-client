"use client";
import classNames from "classnames";
import { PropsWithChildren } from "react";
import SlickSlider, { LazyLoadTypes, Settings } from "react-slick";

interface SliderProps extends PropsWithChildren {
  settings: Settings;
  className?: string;
}

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick, currentSlide, slideCount, ...restProps } =
    props;
  return (
    <div
      {...restProps}
      className={classNames(className)}
      style={{
        ...style,
        display: "block",
        zIndex: 100,
        left: "-3%",
      }}
      onClick={onClick}
    />
  );
};
const SampleNextArrow = (props: any) => {
  const { className, style, onClick, currentSlide, slideCount, ...restProps } =
    props;
  return (
    <div
      {...restProps}
      className={classNames(className)}
      style={{
        ...style,
        display: "block",
        zIndex: 2,
        right: "-3%",
      }}
      onClick={onClick}
    />
  );
};

const Slider = ({ settings, className, children }: SliderProps) => {
  const customizeSettings = {
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    ...settings,
    lazyLoad: "ondemand" as LazyLoadTypes,
  };

  return (
    <SlickSlider {...customizeSettings} className={className}>
      {children}
    </SlickSlider>
  );
};

export default Slider;
