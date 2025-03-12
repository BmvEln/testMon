import { ReactNode } from "react";
import "./style.less";

type HeaderProps = {
  one?: boolean;
  two?: boolean;
  children: ReactNode;
};

function Heading({ one, two, children }: HeaderProps) {
  const levelsH = { h1: one, h2: two },
    Tag =
      Object.keys(levelsH)[Object.values(levelsH).findIndex((e) => e)] || "div";

  return <Tag className="Heading">{children}</Tag>;
}

export default Heading;
