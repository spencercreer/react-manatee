import React from "react";

interface CardProps {
  children?: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col w-full p-4 bg-gray-100 rounded-md">
      {children}
    </div>
  );
}
