import { ChangeEvent } from 'react';

import './page-input-field.styles.scss';

type PageInputFieldProps = {
  label: string;
  fieldName: string;
  currentPage?: number;
  totalPage?: number;
  maxPageCount?: number;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
};

const PageInputField = ({
  label,
  fieldName,
  currentPage,
  totalPage,
  maxPageCount,
  handleChange,
  helperText,
}: PageInputFieldProps) => {
  const value = typeof currentPage === 'number' ? currentPage : totalPage;
  const minValue = typeof currentPage === 'number' ? currentPage : 0;

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const input = evt.target as HTMLInputElement;
    const validityState = input.validity;

    if (validityState.rangeOverflow) {
      input.setCustomValidity(`Max page number is ${maxPageCount}`);
    } else {
      input.setCustomValidity('');
      handleChange(evt);
    }
  };

  return (
    <div className="page-input">
      <label htmlFor={fieldName}>{label}</label>
      <input
        type="number"
        name={fieldName}
        value={value}
        required
        onChange={onChange}
        min={minValue}
        max={maxPageCount}
      />
      <span className="page-input__helper">{helperText}</span>
    </div>
  );
};

export default PageInputField;
