import {useState} from 'react';
import {StyleSheet} from 'react-native';

const monthlyHook = () => {
  const [monthlyList, setMonthlyList] = useState({
    results: [
      {
        id: 0,
        title:"PLN’s Fee",
        budget:"1400000",
        deadline:"5",
      },
      {
        id:1,
        title:"Wifi’s Fee",
        budget:"500000",
        deadline:"5",
      },
      {
        id:2,
        title:"School's Fee",
        budget:"1900000",
        deadline:"15",
      },
    ],
  });

  const setStateNeed = (indexMonthly, newState) => {
    const newResults = [...monthlyList.results];
    newResults[indexMonthly] = newState;
    setMonthlyList({
      results: newResults,
    });
    console.log(newResults)
  };

  const addMonthly = Monthly => {
    const newResults = [...monthlyList.results];
    Monthly.id = newResults.length;
    newResults.push(Monthly);
    setMonthlyList({
      results: newResults,
    });
    console.log(newResults)
  };

  const editMonthly = Monthly => {
    const newResults = [...monthlyList.results];
    newResults[Monthly.id] = Monthly;
    setMonthlyList({
      results: newResults,
    });
    console.log(newResults)
  };

  const deleteMonthly = key => {
    const newResults = [...monthlyList.results];
    newResults.splice(key, 1);

    newResults.map(Monthly => {
      if (Monthly.id > key) {
        Monthly.id = Monthly.id - 1;
      }
    });

    setMonthlyList({
      results: newResults,
    });
    console.log(newResults)
  };

  return [monthlyList, addMonthly, editMonthly, deleteMonthly, setStateNeed];
};

export default monthlyHook;

const styles = StyleSheet.create({});