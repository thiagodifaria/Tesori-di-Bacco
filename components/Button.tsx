import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  to,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  target,
  rel
}) => {
  const baseStyles = `font-sans font-medium rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-accent`;
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs sm:text-sm',
    md: 'px-6 py-2.5 text-sm sm:text-base',
    lg: 'px-8 py-3 text-base sm:text-lg',
  };

  const variantStyles = {
    primary: `bg-burgundy-accent text-white hover:bg-[#5a001d] disabled:bg-gray-300 disabled:text-gray-500 border border-transparent`,
    secondary: `bg-charcoal-gray text-white hover:bg-[#222222] disabled:bg-gray-300 disabled:text-gray-500 border border-transparent`,
    outline: `border-2 border-burgundy-accent text-burgundy-accent hover:bg-burgundy-accent hover:text-white disabled:border-gray-300 disabled:text-gray-400 bg-transparent`,
    text: `text-burgundy-accent hover:text-[#5a001d] disabled:text-gray-400 underline-offset-4 hover:underline bg-transparent px-1 py-0.5`,
  };

  const combinedClassName = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
    ${icon ? 'inline-flex items-center justify-center' : ''}
    ${className}
  `;

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick} target={target} rel={rel}>
        {content}
      </a>
    );
  }
  
  if (to && !disabled) {
    return (
      <Link to={to} className={combinedClassName} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={combinedClassName}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;