const DEFAULT_MESSAGE = "This field is required."
type TReturn = `Your ${string} is required.` | typeof DEFAULT_MESSAGE
export const resolveRequiredMessage = (title?: string): TReturn => title ?  `Your ${title} is required.` : DEFAULT_MESSAGE;
