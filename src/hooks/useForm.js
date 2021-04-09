// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValue] = useState('form', initialValues);

  const handleChanges = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, handleChanges];
};

export default useForm;
