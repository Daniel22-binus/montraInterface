import {useState} from 'react';
import {StyleSheet} from 'react-native';
import firebase from '../../firebase';
import printDate, {getMonthPick} from '../logic/printDate';

const budgetHook = () => {
  const [budgetList, setBudgetList] = useState({
    results: [],
  });

  let path = '/Budget/' + firebase.auth().currentUser?.uid;

  const getBudget = async date => {
    let pathMonth = getMonthPick(date);

    await firebase
      .database()
      .ref(path + '/' + pathMonth)
      .once('value')
      .then(snapshot => {
        if (snapshot) {
          setBudgetList({
            results: snapshot.val(),
          });
        }
      });
  };

  const addBudget = BudgetFirebase => {
    let Budget = BudgetFirebase.Budget;
    let monthPath = getMonthPick(Budget.budgetMonth);
    let month = printDate(Budget.budgetMonth);
    Budget.budgetMonth = month;

    getBudget(month);

    if (budgetList.results) {
      let temp = Object.keys(budgetList.results);
      Budget.id = temp.length;
    }

    firebase
      .database()
      .ref(path + '/' + monthPath)
      .push(Budget)
      .then(() => {
        getBudget(month);
        alert('Successfully added new Budget.');
      })
      .catch(error => {
        alert(error);
      });
  };

  const editBudget = BudgetFirebase => {
    let key = BudgetFirebase.keyFirebase;
    let Budget = BudgetFirebase.Budget;
    let monthPath = getMonthPick(Budget.budgetMonth);
    let month = printDate(Budget.budgetMonth);
    Budget.budgetMonth = month;

    firebase
      .database()
      .ref(path + '/' + monthPath + '/' + key)
      .set(Budget)
      .then(() => {
        getBudget(month);
        alert('Successfully edited Budget.');
      })
      .catch(error => {
        alert(error);
      });
  };

  const deleteBudget = (key, date) => {
    const newResults = budgetList.results;
    const monthPath = getMonthPick(date);

    Object.keys(newResults).map(Budget => {
      if (newResults[Budget].id == key) {
        firebase
          .database()
          .ref(path + '/' + monthPath + '/' + Budget)
          .remove()
          .then(() => {
            alert('Successfully deleted your Budget.');
          })
          .catch(error => {
            alert(error);
          });
      } else if (newResults[Budget].id > key) {
        let temp = newResults[Budget];
        temp.id -= 1;
        firebase
          .database()
          .ref(path + '/' + monthPath + '/' + Budget)
          .set(temp)
          .catch(error => {
            alert(error);
          });
      }
    });
    getBudget(date);
  };

  return [budgetList, getBudget, addBudget, editBudget, deleteBudget];
};

export default budgetHook;

const styles = StyleSheet.create({});
