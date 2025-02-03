import * as Styled from './Select.styles';

import type { SelectType } from './Select.types';

const Select: React.FC<SelectType> = ({ id, label, options, onChange }) => {
  return (
    <Styled.SelectWrapper>
      <label htmlFor={id}>{label}</label>
      <Styled.Select
        name={id}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        data-testid={`select-${id}`}
      >
        {options.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </Styled.Select>
    </Styled.SelectWrapper>
  );
};

export default Select;
