export const validation = (values) => {
  if (values.email.match(/@/) && values.password.length >= 8) {
    return true;
  } else {
    return false;
  }
};

export const validationSignUp = (values) => {
  if (values.password === values.checkPassword) {
    return true;
  }
  return false;
};
