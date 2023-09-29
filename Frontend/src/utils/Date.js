export const calculateDateDifference = (startDate, endDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
  const start = new Date(startDate);
  const end = new Date(endDate);

  const timeDifference = Math.abs(end - start);
  const daysDifference = Math.round(timeDifference / oneDay);

  return daysDifference + 1;
};

export const format_iso_Date = (isoDateString) => {
  const date = new Date(isoDateString);
  return date.toLocaleDateString('en-IN');
};

export const format_date = (inputDate) => {
  var dateObject = new Date(inputDate);

  // Get the day, month, and year from the date object
  var day = dateObject.getDate();
  var month = dateObject.getMonth() + 1; // Adding 1 because months are zero-indexed
  var year = dateObject.getFullYear();

  // Format the date in the desired format (dd/mm/yyyy)
  var formattedDate = day + '/' + month + '/' + year;

  return formattedDate;
};

export const countWeekendDays = (start_date, end_date) => {
  if (!start_date || !end_date) {
    return 0;
  }

  const start = new Date(start_date);
  const end = new Date(end_date);
  let count = 0;

  while (start <= end) {
    const day = start.getDay();
    if (day === 0 || day === 6) {
      // Sunday (0) and Saturday (6)
      count++;
    }
    start.setDate(start.getDate() + 1);
  }

  return count;
};
