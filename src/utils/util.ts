const asciiCapitalConverter = 65;

export const randomVal = (maxVal: number) => Math.floor(Math.random() * maxVal);
export const randomIndex = (array: any) => randomVal(array.length);
export const indexToAlpha = (index: number) => String.fromCharCode(asciiCapitalConverter + index);
export const shuffle: any = (array: any) => array.sort(() => Math.random() - 0.5);
