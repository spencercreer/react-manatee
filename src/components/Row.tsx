import React from "react";

interface RowProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Row({ children, className }: RowProps) {
  return (
    <div
      className={
        className ? `flex flex-row ${className}` : "flex flex-row w-full"
      }
    >
      {children}
    </div>
  );
}
