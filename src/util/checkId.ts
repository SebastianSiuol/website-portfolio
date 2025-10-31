type UUIDv4 = string & { readonly __brand: unique symbol };

export function isUUIDv4(value: string): value is UUIDv4 {
  // UUID v4 regex
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}
