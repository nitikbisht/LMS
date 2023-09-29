export const generateDays = (startDate, endDate) => {
  const days = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
};
