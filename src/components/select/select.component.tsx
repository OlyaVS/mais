import { ChangeEvent, Fragment } from 'react';

import { BookcaseTitle, ShelfTitle } from '../../store/library/libary.types';

import './select.styles.scss';

type SelectProps = {
  label: string;
  items: BookcaseTitle[] | ShelfTitle[];
  onChange: (evt: ChangeEvent<HTMLSelectElement>) => void;
  selectedId: string;
};

const Select = ({ label, items, onChange, selectedId }: SelectProps) => {
  return (
    <Fragment>
      <label htmlFor="library" className="visually-hidden">
        {label}
      </label>

      <select name="library" id="library" onChange={onChange} defaultValue={selectedId}>
        {items.map((item) => (
          <option value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </Fragment>
  );
};

export default Select;
