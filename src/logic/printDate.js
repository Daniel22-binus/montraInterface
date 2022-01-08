const months = [
  'January',
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const printDate = getDate => {
  let date = new Date(getDate);

  let result =
    date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();

  return result;
};

const getMonthPick = getDate => {
  let date = new Date(getDate);

  let result = months[date.getMonth()] + date.getFullYear();

  return result;
};

export {getMonthPick};
export default printDate;
