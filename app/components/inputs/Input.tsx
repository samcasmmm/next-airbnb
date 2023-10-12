'use client';

import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { BiRupee } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  error: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  disabled,
  formatPrice,
  required,
  register,
  error,
}) => {
  return (
    <div className='w-full relative'>
      {formatPrice && (
        <BiRupee size={24} className='text-neutral-700 absolute top-5 left-2' />
      )}
      <input
        type='text'
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=''
      />
    </div>
  );
};

export default Input;
