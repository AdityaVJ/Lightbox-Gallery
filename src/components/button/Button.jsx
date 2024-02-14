import React, { useState } from "react";
import PropTypes from "prop-types";
import "./button.css";
import { Button as MUIButton } from "@mui/material";

export default function Button({
  backgroundColor,
  size,
  label,
  iconLeft,
  iconRight,
  variant,
  showAnimation,
  styles,
  icon,
  onClick,
  borderColor,
  color,
  disabled,
  borderRadius,
  hoverColor,
}) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    if (showAnimation) {
      setIsHover(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const ButtonStyles = {
    ...styles,
    backgroundColor:
      variant === "contained"
        ? isHover
          ? hoverColor || "#1c1c1c"
          : backgroundColor || "red"
        : "",
    borderColor: variant === "outlined" ? borderColor || "red" : "",
    color: variant === "contained" ? color || "white" : color || "red",
    borderRadius: borderRadius || 0,
    transition: " color 0.25s ease-in-out, background-color 0.35s ease-in-out",
    boxShadow: "none",
    textTransform: "none",
  };
  return (
    <>
      {iconLeft && icon && (
        <MUIButton
          variant={variant}
          size={size}
          startIcon={icon}
          style={ButtonStyles}
          onClick={onClick}
          disabled={disabled}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={!showAnimation && variant!=="contained"?"noHover":""}
        >
          {label}
        </MUIButton>
      )}
      {iconRight && icon && (
        <MUIButton
          variant={variant}
          size={size}
          endIcon={icon}
          style={ButtonStyles}
          onClick={onClick}
          disabled={disabled}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={!showAnimation && variant!=="contained"?"noHover":""}
        >
          {label}
        </MUIButton>
      )}
      {icon === null && (
        <MUIButton
          variant={variant}
          size={size}
          style={ButtonStyles}
          onClick={onClick}
          disabled={disabled}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={!showAnimation && variant!=="contained"?"noHover":""}
        >
          {label}
        </MUIButton>
      )}
      {iconRight && iconLeft && icon && (
        <MUIButton
          variant={variant}
          size={size}
          endIcon={icon}
          startIcon={icon}
          style={ButtonStyles}
          onClick={onClick}
          disabled={disabled}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={!showAnimation && variant!=="contained"?"noHover":""}
        >
          {label}
        </MUIButton>
      )}
    </>
  );
}

Button.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  showAnimation: PropTypes.bool,
  styles: PropTypes.object,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  backgroundColor: null,
  borderColor: null,
  color: null,
  hoverColor: null,
  size: "medium",
  onClick: () => console.log("clicked"),
  label: "button",
  iconLeft: false,
  iconRight: false,
  variant: "contained",
  showAnimation: false,
  styles: {},
  icon: null,
  disabled: false,
  borderRadius: 0,
};
