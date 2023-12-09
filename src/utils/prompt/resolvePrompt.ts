const PROMPT_DELIMITER = ':';

export const resolvePrompt = (
  ...items: (
    | string
    | null
    | undefined
  )[]
) =>
  items
    ?.filter(Boolean)
    ?.join(PROMPT_DELIMITER)
    ?.trim();
