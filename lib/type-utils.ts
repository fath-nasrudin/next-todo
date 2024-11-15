export type PartiallyOptional<T, K extends keyof T> = Partial<Pick<T, K>> &
  Omit<T, K>;

export type PartiallyRequired<T, K extends keyof T> = Required<Pick<T, K>> &
  Partial<Omit<T, K>>;
