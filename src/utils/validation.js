import {useEffect, useState} from "react";

const useValidation = (values) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (values.email.match(/@/) && values.password.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [values.email, values.password]);

  return isValid;
};

export default useValidation;
