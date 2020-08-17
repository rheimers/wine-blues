import React from "react";
import "./ListItem.css";

export default function ListItem({ children, href }) {
  return (
    <a className="listItem" href={href}>
      {children}
    </a>
  );
}
