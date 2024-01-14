import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | undefined;
}

export default function Input({ label, className, ...props }: InputProps) {
  return (
    <div className={className}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        {...props}
      />
    </div>
  );
}
