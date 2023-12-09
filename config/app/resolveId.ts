const dec2hex = (dec: number) => {
  return dec.toString(16).padStart(2, '0');
};

export const resolveId = (len = 20, getRandomValues: (arr: Uint8Array) => void): string => {
  const arr = new Uint8Array(len / 2);
  getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
};

export const resolveSeededHash = (seed: string) => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(36);
};
