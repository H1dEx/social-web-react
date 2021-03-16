export const required = (value: string) =>
  value ? undefined : 'Field is required'

export const maxLengthCreator = (maxLength: number) => (value: string) =>
  value.length <= maxLength ? undefined : `Max length is ${maxLength} symbols`
