const validate = (schema, request) => {
  const result = schema.validate(request);
  if (result.error) {
    throw new Error(result.error.message);
  }
  return result.value;
};

export { validate };
