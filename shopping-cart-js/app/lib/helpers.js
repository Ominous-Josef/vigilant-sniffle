/**
 * @template T
 * @param {T[]} itemArray
 * @param {string} fieldPath
 * @param {string} multiplierPath
 * @returns {number}
 */
export function sumField(itemArray, fieldPath, multiplierPath) {
  return itemArray.reduce((sum, item) => {
    const value = fieldPath.split(".").reduce((obj, key) => {
      if (obj && typeof obj === "object" && key in obj) {
        return (obj)[key];
      }
      return undefined;
    }, item);

    const multiplier = multiplierPath.split(".").reduce((obj, key) => {
      if (obj && typeof obj === "object" && key in obj) {
        return (obj)[key];
      }
      return 1;
    }, item);

    return sum + Number(value) * Number(multiplier);
  }, 0);
}
