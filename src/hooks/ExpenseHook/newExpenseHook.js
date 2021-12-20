import {useState} from 'react';

const newExpenseHook = () => {
  const [newExpense, setNewExpense] = useState({
    id: 0,
    budgetId: 0,
    expensesDescription: '',
    date: new Date(),
    amount: 0,
  });

  const inputBudgetIdField = newBudgetID => {
    setNewExpense({
      ...newExpense,
      budgetId: parseInt(newBudgetID, 10),
    });
  };

  const inputDescriptionField = newDescription => {
    setNewExpense({
      ...newExpense,
      expensesDescription: newDescription,
    });
  };

  const inputDateField = newDate => {
    setNewExpense({
      ...newExpense,
      date: new Date(newDate),
    });
  };

  const inputAmountField = newAmount => {
    setNewExpense({
      ...newExpense,
      amount: newAmount,
    });
  };

  return [
    newExpense,
    inputBudgetIdField,
    inputDescriptionField,
    inputDateField,
    inputAmountField,
  ];
};

export default newExpenseHook;
