import React from "react";

type Header = {
  title: string;
};

const Header: React.FC<Header> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Header;