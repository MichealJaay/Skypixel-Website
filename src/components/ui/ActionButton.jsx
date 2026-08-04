import React from 'react';

export default function ActionButton({
  as: Component = 'a',
  variant = 'primary',
  className = '',
  children,
  icon,
  ...props
}) {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {icon}
      {children}
    </Component>
  );
}
