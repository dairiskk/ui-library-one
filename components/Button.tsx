'use client'
import React from "react";


type ButtonVariant = "primary" | "secondary" | "danger";

export function Button({
  text,
  variant = "primary",
  icon,
  disabled = false,
  isLoading = false,
  className = "",
  ...props
}: {
  text: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  [key: string]: any;
}) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button
      className={`px-4 py-2 md:px-6 md:py-3 text-white rounded-2xl shadow-md transition w-full md:w-auto flex items-center justify-center gap-2 ${
        variants[variant]
      } ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {icon && <span className="icon">{icon}</span>}
      {isLoading ? "Loading..." : text}
    </button>
  );
}