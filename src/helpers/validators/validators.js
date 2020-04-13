export const required = (value) => (value) ? undefined : 'Field is required';

export const maxLengthCreator = maxLength => value => (value.length <=maxLength)?undefined:`Max length is ${maxLength} symbols`;
