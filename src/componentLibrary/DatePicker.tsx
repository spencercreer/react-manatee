import React, { InputHTMLAttributes } from "react";

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | undefined;
}

export default function DatePicker({
  label,
  className,
  ...props
}: DatePickerProps) {
  return (
    <div className={className}>
      <label htmlFor="start">{label}</label>
      <input
        type="date"
        id="start"
        name="trip-start"
        value="2018-07-22"
        min="2018-01-01"
        max="2018-12-31"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        {...props}
      />
    </div>
  );
}
