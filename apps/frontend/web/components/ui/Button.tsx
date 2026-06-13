
import { ReactNode } from "react";

type ButtonBackProps = {
  text?: string;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
};

export default function Button({
  text = "",
  className = "",
  icon = "",
  onClick,
}: ButtonBackProps) {
  return (
    <button
      onClick={onClick}
      className={` ${className}`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}