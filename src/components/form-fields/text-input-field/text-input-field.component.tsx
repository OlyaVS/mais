import { ChangeEvent } from 'react';
import { MIN_TEXT_FIELD_LENGTH } from '../../../constants';

import './text-input-field.styles.scss';

type TextInputFieldProps = {
  label: string;
  fieldName: string;
  placeholder: string;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const TextInputField = ({
  label,
  fieldName,
  placeholder,
  handleChange,
  value,
}: TextInputFieldProps) => {
  return (
    <div className="text-field">
      <label htmlFor={fieldName}>{label}</label>
      <input
        name={fieldName}
        type="text"
        placeholder={placeholder}
        minLength={MIN_TEXT_FIELD_LENGTH}
        required={true}
        onChange={handleChange}
        value={value}
      />
      <span className="text-field__helper">Enter min {MIN_TEXT_FIELD_LENGTH} characters</span>
    </div>
  );
};

export default TextInputField;
