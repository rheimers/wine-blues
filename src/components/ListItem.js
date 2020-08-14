import React from "react";

export default function ListItem({ children, href }) {
  return <a href={href}>{children}</a>;
}
