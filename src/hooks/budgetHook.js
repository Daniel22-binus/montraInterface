import {useState} from 'react';
import {StyleSheet} from 'react-native';

const budgetHook = () => {
  const [budgetList, setBudgetList] = useState({
    results: [
      {
        id: 0,
        title:"Education",
        total:"10000000",
        budgetUse:"5400000"
      },
      {
        id:1,
        title:"Food and Beverage",
        total:"5000000",
        budgetUse:"4500000"
      },
      {
        id:2,
        title:"Transportation",
        total:"1000000",
        budgetUse:"100000"
      },
    ],
  });

  const setStateNeed = (indexBudget, newState) => {
    const newResults = [...budgetList.results];
    newResults[indexBudget] = newState;
    setBudgetList({
      results: newResults,
    });
  };

  const addBudget = Budget => {
    const newResults = [...budgetList.results];
    Budget.id = newResults.length;
    newResults.push(Budget);
    setBudgetList({
      results: newResults,
    });
  };

  const editBudget = Budget => {
    const newResults = [...budgetList.results];
    newResults[Budget.id] = Budget;
    setBudgetList({
      results: newResults,
    });
  };

  const deleteBudget = key => {
    const newResults = [...budgetList.results];
    newResults.splice(key, 1);

    newResults.map(Budget => {
      if (Budget.id > key) {
        Budget.id = Budget.id - 1;
      }
    });

    setBudgetList({
      results: newResults,
    });
  };

  return [budgetList, addBudget, editBudget, deleteBudget, setStateNeed];
};

export default budgetHook;

const styles = StyleSheet.create({});