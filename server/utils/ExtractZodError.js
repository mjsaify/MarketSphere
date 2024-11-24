export const ExtractZodError = (error) => {
    return Object.entries(error).map(([field, errorDetails]) => (
        { field, errors: errorDetails?._errors || [], }
    ))
    .filter((error) => error.errors.length > 0); // Remove fields with no errors
};