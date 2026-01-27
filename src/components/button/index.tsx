import React from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  modifier?: string;
}

const Button = ({
  primary,
  modifier,
  children,
  onClick,
  ...rest
}: IButton) => {
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded-lg transition-all duration-200`;
  const styles = primary
    ? `bg-[#1b4b8d] text-white border-[#1b4b8d] hover:bg-[#1b4b8d]/90 hover:shadow-md`
    : `bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-[#60cacc]/40`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyle} ${styles} ${modifier ?? ``}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;