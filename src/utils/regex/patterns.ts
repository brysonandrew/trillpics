export const REGEX_ILLEGAL_CHARS_G = new RegExp(/[^0-9A-Za-z_, %'().\//-]/, 'g');
export const REGEX_ONE_UPPERCASE = new RegExp(".*[A-Z].*");
export const REGEX_ONE_LOWERCASE = new RegExp(".*[a-z].*")
export const REGEX_ONLY_DIGIT = new RegExp("^[0-9]*$")
export const REGEX_NOT_DIGIT_GI = /\D/gi