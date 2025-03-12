import "./style.less";
import classNames from "classnames";
import React from "react";
import Heading from "../Header";

interface PageProps {
  className?: string;
  style?: object;
  children?: React.ReactNode;
  textHeading?: string;
  subHeading?: string;
}

function Page({
  children,
  style,
  className,
  textHeading,
  subHeading,
}: PageProps) {
  return (
    <div className={classNames("Page", className)} style={style}>
      <div className="Page__content">
        {!textHeading ? null : <Heading one>{textHeading}</Heading>}
        {!subHeading ? null : <Heading two>{subHeading}</Heading>}
        {children}
      </div>
    </div>
  );
}

export default Page;
