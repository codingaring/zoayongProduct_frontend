'use client';
import { ChangeEvent, useState } from 'react';

const useInputValue = () => {
  const [value, setValue] = useState('');

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSetValue = (input: string) => {
    setValue(input);
  };

  const handleResetValue = () => {
    setValue('');
  };

  return { value, handleSetValue, handleResetValue, handleChangeValue };
};

export default useInputValue;
