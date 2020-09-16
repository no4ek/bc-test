export function removeFromArray<T = string|number>(array: T[], value: T) : void {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
}

export function round(num: number, decimals?: number) : number {
  return decimals 
    ? Math.round((num + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals)
    : Math.round(num);
}

export function isEmptyOrSpaces(str: string): boolean {
  return str === null || str.match(/^ *$/) !== null;
}