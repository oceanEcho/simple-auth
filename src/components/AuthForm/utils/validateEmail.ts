import {
  EMAIL_REGEXP,
  EMPTY_FIELD_ERROR,
  INVALID_EMAIL_ERROR,
} from "../constants";

export const validateEmail = (value: string): string | boolean => {
  if (!value) {
    return EMPTY_FIELD_ERROR;
  }

  const isValid = value.toLowerCase().match(EMAIL_REGEXP);

  if (!isValid) {
    return INVALID_EMAIL_ERROR;
  }

  return true;
};
