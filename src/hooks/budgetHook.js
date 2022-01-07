import {useState} from 'react';
import {StyleSheet} from 'react-native';
import firebase from '../../firebase'

const budgetHook = () => {
  const [budgetList, setBudgetList] = useState({
    results: [],
  });
  
  let path = '/Budget/' + firebase.auth().currentUser?.uid;
  
  const getBudget = async() => {
    await firebase
    .database()
    .ref(path)
    .once('value')
    .then(snapshot => {
      if (snapshot) {
        setBudgetList({
          results: snapshot.val(),
        });
      }
    });
  }

  const addBudget = BudgetFirebase => {
    let Budget = BudgetFirebase.Budget;

    if (budgetList.results) {
      let temp = Object.keys(budgetList.results);
      Budget.id = temp.length;
    }

    firebase
      .database()
      .ref(path)
      .push(Budget)
      .then(() => {
        getBudget();
        alert('Successfully added new Budget.');
      })
      .catch(error => {
        alert(error);
      });
  };

  const editBudget = BudgetFirebase => {
    firebase
      .database()
      .ref(path + '/' + BudgetFirebase.keyFirebase)
      .set(BudgetFirebase.Budget)
      .then(() => {
        getBudget();
        alert('Successfully edited Budget.')
      })
      .catch(error => {
        alert(error);
      });
  };

  const deleteBudget = key => {
    const newResults = budgetList.results;
    Object.keys(newResults).map(Budget => {
      if (newResults[Budget].id == key) {
        firebase
          .database()
          .ref(path + '/' + Budget)
          .remove()
          .then(()=>{
            alert('Successfully deleted your Budget.')
          })
          .catch(error => {
            alert(error);
          });
      } else if (newResults[Budget].id > key) {
        let temp = newResults[Budget];
        temp.id -= 1;
        firebase
          .database()
          .ref(path + '/' + Budget)
          .set(temp)
          .catch(error => {
            alert(error);
          });
      }
    });
    getBudget();
  };


  return [budgetList, getBudget, addBudget, editBudget, deleteBudget];
};

export default budgetHook;

const styles = StyleSheet.create({});