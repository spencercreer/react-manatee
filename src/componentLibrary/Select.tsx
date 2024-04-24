import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string | undefined;
  options: { value: string; label: string }[];
}

export default function Select({
  label,
  className,
  options,
  ...props
}: SelectProps) {
  return (
    <div className={className}>
      {label && <label htmlFor={props.id}>{label}</label>}
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
