export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split("/")
    .map((datePart: string): number => parseInt(datePart))
    .reverse();

  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
};
