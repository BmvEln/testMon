import { ReactNode } from "react";
import "./style.less";
import classNames from "classnames";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

function Button({ children, onClick, className }: ButtonProps) {
  return (
    <div className={classNames("Button", className)} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
