import { EMPTY_FIELD_ERROR } from "../constants";

export const validatePassword = (value: string): string | boolean => {
  if (!value) {
    return EMPTY_FIELD_ERROR;
  }

  return true;
};
