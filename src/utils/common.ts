export const validateRequired = (errorMessage: string, value: any) => {
  if (
    (typeof value === "string" && !value.trim()) ||
    (typeof value === "number" && !value) ||
    (Array.isArray(value) && value.length < 1)
  ) {
    return errorMessage;
  }
  return "";
};
