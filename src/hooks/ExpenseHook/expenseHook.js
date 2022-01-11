import {useState} from 'react';
import firebase from '../../../firebase';
import {objectToList} from '../../logic/firebaseFunction';
import {getMonthPick} from '../../logic/printDate';

const expenseHook = () => {
  const [expenseList, setExpenseList] = useState({
    results: [],
  });

  let path = '/Expense/' + firebase.auth().currentUser?.uid;

  const getExpense = async date => {
    let pathMonth = getMonthPick(date);

    await firebase
      .database()
      .ref(path + '/' + pathMonth)
      .once('value')
      .then(snapshot => {
        if (snapshot) {
          setExpenseList({
            results: snapshot.val(),
          });
        }
      });
  };

  const AddNewExpense = expense => {
    if (expense.budgetId == -1) {
      alert('you need to select Budget Category');
      return false;
    }

    let dateTemp = expense.date;
    getExpense(dateTemp); // ini sebenarnya tidak jalan, yang jalan dalam callback
    let resultDate = dateTemp.toString();
    let monthPath = getMonthPick(expense.date);
    let newExpense = {...expense};
    newExpense.date = resultDate;

    if (expenseList.results) {
      let temp = objectToList(expenseList.results);
      newExpense.id = temp.length;
    }

    firebase
      .database()
      .ref(path + '/' + monthPath)
      .push(newExpense)
      .then()
      .catch(error => {
        alert(error);
      });
    return true;
  };

  return [expenseList, getExpense, AddNewExpense];
};

export default expenseHook;
