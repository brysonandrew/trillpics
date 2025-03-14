export const debounce = (
  func: (...args: any[]) => any,
  timeout = 300
) => {
  let timer: ReturnType<
    typeof setTimeout
  >;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};
