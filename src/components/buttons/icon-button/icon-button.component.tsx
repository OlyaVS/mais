import React from 'react';

import './icon-button.styles.scss';

type IconButtonProps = {
  children: JSX.Element;
  onClick: () => void;
  title: string;
  disabled?: boolean;
  accent?: boolean;
};

const IconButton = ({ children, onClick, title, disabled, accent }: IconButtonProps) => {
  return (
    <button
      className={accent ? 'icon-button icon-button--accent' : 'icon-button'}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <span className="visually-hidden">{title}</span>
    </button>
  );
};

export default IconButton;
