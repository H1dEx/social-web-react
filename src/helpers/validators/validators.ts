export type FieldValidatorType = (value: string) => string | undefined;

export const required: FieldValidatorType = (value) => (value) ? undefined : 'Field is required';

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => (value.length <=maxLength)?undefined:`Max length is ${maxLength} symbols`;
