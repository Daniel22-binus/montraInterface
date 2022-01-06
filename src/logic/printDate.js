const printDate = getDate => {
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

  let date = new Date(getDate);

  let result =
    date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();

  return result;
};

export default printDate;
