export function generateIsoFormattedDate(normalDate) {
  //convert the date string to a javascript date object
  const dateOject = new Date(normalDate);
  // format the date as a string in iso8601 format
  const isoFormattedDate = dateOject.toISOString();
  return isoFormattedDate;
}
