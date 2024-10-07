export function randomElement<T>(array: Array<T>): T {
  return array[Math.floor(Math.random() * array.length)];
}

export const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
