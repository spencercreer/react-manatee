import React from "react";

interface CardProps {
  id: number | string;
  title?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  selected?: boolean;
  onClick?: (id: number | string) => void;
}

export default function Card({
  id,
  title,
  body,
  footer,
  selected = false,
  onClick,
}: CardProps) {
  return (
    <div
      // className="flex flex-col w-full p-4 bg-gray-100 rounded-md"
      className={
        selected
          ? "relative px-3 py-4 w-full bg-gray-100 rounded-md border-blue-500 border-2 shadow-lg"
          : "relative px-3 py-4 w-full bg-gray-100 border-[1px] border-gray-200 rounded-md hover:border-base-green-50 hover:border-2 hover:shadow-lg"
      }
      onClick={onClick ? () => onClick(id) : undefined}
    >
      <h3>{title}</h3>
      {body}
      <div className="mt-auto">{footer}</div>
    </div>
  );
}
