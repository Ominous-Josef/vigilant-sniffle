export function sumField<T>(
  array: T[],
  fieldPath: string,
  multiplierPath: string
): number {
  return array.reduce((sum, item) => {
    const value = fieldPath.split(".").reduce((obj: unknown, key) => {
      if (obj && typeof obj === "object" && key in obj) {
        return (obj as Record<string, unknown>)[key];
      }
      return undefined;
    }, item);

    const multiplier = multiplierPath.split(".").reduce((obj: unknown, key) => {
      if (obj && typeof obj === "object" && key in obj) {
        return (obj as Record<string, unknown>)[key];
      }
      return 1;
    }, item);

    return (
      sum + (value as unknown as number) * (multiplier as unknown as number)
    );
  }, 0);
}
