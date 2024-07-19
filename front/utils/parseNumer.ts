export const parseNumber = (value: string | number) =>
  `$${String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
