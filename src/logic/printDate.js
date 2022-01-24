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

const getStrDate = (StrDate) => {

  let now = new Date();
  let result = months[now.getMonth()] + " " + StrDate + " " + now.getFullYear() +" 09:30:00 GMT+0700 (+07)";
  return result;
}

export {getMonthPick, getStrDate};
export default printDate;
