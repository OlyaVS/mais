import './menu-item.styles.scss';

type MenuItemProps = {
  onClick?: () => void;
  disabled: boolean;
  title: string;
  value?: string;
  children?: JSX.Element;
};

const MenuItem = ({ onClick, disabled, title, value, children }: MenuItemProps) => {
  return (
    <li className="menu-item">
      <button className="menu-item__action" onClick={onClick} disabled={disabled} value={value}>
        {title}
      </button>
      {children}
    </li>
  );
};

export default MenuItem;
