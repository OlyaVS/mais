import { ChangeEvent } from 'react';
import { MAX_READING_SPEED, MIN_READING_SPEED } from '../../../constants';

import './speed-input-field.styles.scss';

type SpeedInputFieldProps = {
  label: string;
  fieldName: string;
  value: number;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};

const SpeedInputField = ({ label, fieldName, value, handleChange }: SpeedInputFieldProps) => {
  return (
    <div className="speed-field">
      <label htmlFor={fieldName}>{label}</label>
      <input
        type="number"
        name={fieldName}
        value={value}
        required
        onChange={handleChange}
        min={MIN_READING_SPEED}
        max={MAX_READING_SPEED}
      />
      <span className="speed-field__helper">Enter average daily read amount of pages</span>
    </div>
  );
};

export default SpeedInputField;
