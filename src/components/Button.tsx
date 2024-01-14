import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
  className?: string;
}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <div className={className}>
      <button
        {...props}
        className="w-full h-9 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
