import {useState} from 'react';

const expenseHook = () => {
  const [expenseList, setExpenseList] = useState([
    //ini hanya dummy
    //untuk budgetID
    //1 = konsumsi
    //2 = edukasi
    //3 = lain lain
    {
      id: 0,
      budgetId: 2,
      expensesDescription: 'Bayar SPP bulan Januari',
      date: new Date('3 January 2021'),
      amount: 1000000,
    },
    {
      id: 1,
      budgetId: 1,
      expensesDescription: 'Beli Xing Fu Tang',
      date: new Date('10 January 2021'),
      amount: 35000,
    },
    {
      id: 2,
      budgetId: 3,
      expensesDescription: 'PLN',
      date: new Date('10 January 2021'),
      amount: 500000,
    },
    {
      id: 3,
      budgetId: 3,
      expensesDescription: 'Isi Saldo MRR Card',
      date: new Date('13 January 2021'),
      amount: 100000,
    },
    {
      id: 4,
      budgetId: 1,
      expensesDescription: 'Beli mcflurry rainbow',
      date: new Date('15 January 2021'),
      amount: 50000,
    },
  ]);

  return [expenseList];
};

export default expenseHook;
