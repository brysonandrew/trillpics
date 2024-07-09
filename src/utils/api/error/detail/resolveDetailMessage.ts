import { TErrorDetail } from "./config";

export const resolveDetailMessage = (
  rows: TErrorDetail[]
) => {
  rows.forEach(
    ({
      loc,
      msg,
      type,
    }: TErrorDetail) => {
      const content = `
    location: ${loc.join(" - ")}
    message: ${msg}
    type: ${type}
`;
      toast.error(content);
    }
  );
};
