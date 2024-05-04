const validate = (schema, request) => {
  const result = schema.validate(request);
  if (result.error) {
    throw new Error(result.error.message); // More descriptive error message
  }
  return result.value; // Return validated data
};

export { validate };
