import { useState } from "react";

const useForm = () => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>("");

  function validate(value: string) {
    if (!value) {
      setError("Please, enter a valid value.");
      return false;
    }
    return true;
  }

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    validate(target.value);
    setValue(target.value);
  }
  return {
    onChange,
    value,
    error,
    onBlur: () => validate(value),
  };
};

export default useForm;
