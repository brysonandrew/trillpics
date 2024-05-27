export const localCheck = () => {
  console.log(process.env._IS_LOCAL)
  return Boolean(process.env._IS_LOCAL);
};
