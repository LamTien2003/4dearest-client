"use client";
import classnames from "classnames";
import Link from "next/link";

import {
  ButtonColorType,
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "./Button.d";
import styles from "./Button.module.css";

const Button = ({
  size = ButtonSize.Large,
  variant = ButtonVariant.Outline,
  colorType = ButtonColorType.Primary,
  leftIcon,
  rightIcon,
  children,
  href,
  className,
  disabled = false,
  isSubmit = false,
  onClick,
}: ButtonProps) => {
  const handleClick = (e: any) => {
    if (!disabled) {
      return onClick && onClick(e);
    }
    e.preventDefault();
  };

  return (
    <>
      {href ? (
        <Link
          className={classnames(
            styles["button"],
            styles[size],
            styles[variant],
            styles[colorType],
            className,
            {
              [styles["disabled"]]: disabled,
            }
          )}
          href={href}
        >
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
        </Link>
      ) : (
        <button
          type={isSubmit ? "submit" : "button"}
          className={classnames(
            styles["button"],
            styles[size],
            styles[variant],
            styles[colorType],
            className,
            {
              [styles["disabled"]]: disabled,
            }
          )}
          onClick={handleClick}
        >
          {leftIcon && leftIcon}
          {children}
          {rightIcon && rightIcon}
        </button>
      )}
    </>
  );
};

export default Button;
