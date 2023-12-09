const dec2hex = (dec: number) => {
  return dec.toString(16).padStart(2, '0');
};

export const generateId = (len = 20) => {
  const arr = new Uint8Array(len / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
};
