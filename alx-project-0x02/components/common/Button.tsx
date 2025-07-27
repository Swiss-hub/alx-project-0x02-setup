import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => (
  <button
    className={`px-4 py-2 rounded bg-blue-600 text-white ${className || ""}`}
    onClick={onClick}
    type="button"
  >
    {label}
  </button>
);

export default Button;