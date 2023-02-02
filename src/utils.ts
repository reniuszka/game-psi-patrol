// Shuffling - przetasowac karty- an array or a list means that we randomly re-arranging the content of that structure.
export const shuffleArray = (arr: any[]): any[] => {
  return arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
};
