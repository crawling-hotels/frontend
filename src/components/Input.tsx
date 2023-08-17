import React from 'react';
import styled from '@emotion/styled';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

const Base = styled.div`
  position: relative;
  
  & input {
    border-radius: 10px;
    height: 60px;
    width: 320px;
    padding-left: 10px;
    padding-top: 7px;
    padding-bottom: 0;
    font-size: 16px;
    border: 2px solid #E1DFDF;

    &:focus {
      border-color: black;
    }

    &.hasError {
      border-color: #FF5E5E;
    }
  }

  & label {
    position: absolute;
    top: 5px;
    left: 10px;
    font-size: 15px;
    font-weight: bold;
    color: #6D6D6D;

    &.hasError {
      color: #FF5E5E;
    }
  }
`;

interface InputProps {
  id :string;
  label: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  register,
  errors
}) => {

  return (
    <Base>
      <input 
        id={id}
        type={type}
        className={errors[id] ? 'hasError' : ''}
        {...register(id, {
          required: true
        })}
      />
      <label
        className={errors[id] ? 'hasError' : ''}
      >
        {label}
      </label>
    </Base>
  )
}

export default Input