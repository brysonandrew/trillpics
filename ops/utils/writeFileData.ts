    
    
import fs from "fs/promises";

export const writeFileData = (
  path: string,
  data: object
) => {
  fs.writeFile(
    path,
    JSON.stringify(data)
  );
};
