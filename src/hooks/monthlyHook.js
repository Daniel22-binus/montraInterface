import {useState} from 'react';
import firebase from '../../firebase';

const monthlyHook = () => {
  const [monthlyList, setMonthlyList] = useState({
    results: [],
  });

  let path = '/MonthlyPayment/' + firebase.auth().currentUser?.uid;

  const setState = (indexMonthly, newState) => {
    firebase
      .database()
      .ref(path + '/' + indexMonthly + '/paymentState')
      .set(newState)
      .then(() => {
        getMonthly();
      })
      .catch(error => {
        alert(error);
      });
  };

  const getMonthly = async () => {
    await firebase
      .database()
      .ref(path)
      .once('value')
      .then(snapshot => {
        if (snapshot) {
          setMonthlyList({
            results: snapshot.val(),
          });
        }
      });
  };

  const addMonthly = MonthlyFirebase => {
    let Monthly = MonthlyFirebase.Monthly;

    if (monthlyList.results) {
      let temp = Object.keys(monthlyList.results);
      Monthly.id = temp.length;
    }

    firebase
      .database()
      .ref(path)
      .push(Monthly)
      .then(() => {
        getMonthly();
        alert('Successfully added new Monthly Payment.');
      })
      .catch(error => {
        alert(error);
      });
  };

  const editMonthly = MonthlyFirebase => {
    firebase
      .database()
      .ref(path + '/' + MonthlyFirebase.keyFirebase)
      .set(MonthlyFirebase.Monthly)
      .then(() => {
        getMonthly();
        alert('Successfully edited Monthly Payment.')
      })
      .catch(error => {
        alert(error);
      });
  };

  const deleteMonthly = key => {
    const newResults = monthlyList.results;
    Object.keys(newResults).map(Monthly => {
      if (newResults[Monthly].id == key) {
        firebase
          .database()
          .ref(path + '/' + Monthly)
          .remove()
          .then(()=>{
            alert('Successfully deleted your Monthly Payment.')
          })
          .catch(error => {
            alert(error);
          });
      } else if (newResults[Monthly].id > key) {
        let temp = newResults[Monthly];
        temp.id -= 1;
        firebase
          .database()
          .ref(path + '/' + Monthly)
          .set(temp)
          .catch(error => {
            alert(error);
          });
      }
    });
    getMonthly();
  };

  return [
    monthlyList,
    getMonthly,
    addMonthly,
    editMonthly,
    deleteMonthly,
    setState,
  ];
};

export default monthlyHook;
