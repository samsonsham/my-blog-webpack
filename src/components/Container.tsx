import React, { Children } from "react";
import "./Container.scss";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default Container;
