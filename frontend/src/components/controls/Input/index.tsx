import React, { useRef } from "react";
import "./style.less";

type Props = {
  value: string;
  onChange: (e: string) => void;
  placeholder?: string;
  type?: string;
  width?: number;
  style?: object;
  numberFound?: number;
};

function Input({
  placeholder,
  type,
  value,
  onChange,
  width,
  style,
  numberFound,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className={"Input"}>
      <div className="Input__iconSearch" />

      <input
        style={{
          width,
          ...style,
        }}
        ref={inputRef}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        disabled={false}
      />

      {typeof numberFound !== "number" ? null : (
        <div className="Input__numberFound">{numberFound} tests</div>
      )}
    </div>
  );
}

export default Input;
