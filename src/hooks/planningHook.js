import {useState} from 'react';
import firebase from '../../firebase';

const planningHook = () => {
  const [planningList, setPlanningList] = useState({
    results: [],
  });

  let path = '/PlanningList/' + firebase.auth().currentUser?.uid;

  const setStateNeed = (indexPlan, indexNeed, newState) => {
    // const newResults = [...planningList.results];
    // newResults[indexPlan].needs[indexNeed].needState = newState;
    // setPlanningList({
    //   results: newResults,
    // });

    firebase
      .database()
      .ref(path + '/' + indexPlan + '/needs/' + indexNeed + '/needState')
      .set(newState)
      .then(() => {
        getPlan();
      })
      .catch(error => {
        alert(error);
      });
  };

  const getPlan = async () => {
    await firebase
      .database()
      .ref(path)
      .once('value')
      .then(snapshot => {
        if (snapshot) {
          // console.log('=====================================');
          setPlanningList({
            results: snapshot.val(),
          });
        }
      });
  };

  const addPlanItem = PlanFirebase => {
    // const newResults = [...planningList.results];
    // Plan.id = newResults.length;
    // newResults.push(Plan);
    // setPlanningList({
    //   results: newResults,
    // });

    let Plan = PlanFirebase.Plan;

    if (planningList.results) {
      let temp = Object.keys(planningList.results);
      Plan.id = temp.length;
    }

    firebase
      .database()
      .ref(path)
      .push(Plan)
      .then(() => {
        getPlan();
        alert('success add new Planning');
      })
      .catch(error => {
        alert(error);
      });
  };

  const editPlanItem = PlanFirebase => {
    // const newResults = [...planningList.results];
    // newResults[Plan.id] = Plan;
    // setPlanningList({
    //   results: newResults,
    // });

    firebase
      .database()
      .ref(path + '/' + PlanFirebase.keyFirebase)
      .set(PlanFirebase.Plan)
      .then(() => {
        getPlan();
        alert('success edit Planning');
      })
      .catch(error => {
        alert(error);
      });
  };

  const deletePlanItem = key => {
    // const newResults = [...planningList.results];
    // newResults.splice(key, 1);
    // newResults.map(plan => {
    //   if (plan.id > key) {
    //     plan.id = plan.id - 1;
    //   }
    // });
    // setPlanningList({
    //   results: newResults,
    // });

    const newResults = planningList.results;

    Object.keys(newResults).map(plan => {
      if (newResults[plan].id == key) {
        firebase
          .database()
          .ref(path + '/' + plan)
          .remove()
          .catch(error => {
            alert(error);
          });
      } else if (newResults[plan].id > key) {
        let tempPlan = newResults[plan];
        tempPlan.id -= 1;
        firebase
          .database()
          .ref(path + '/' + plan)
          .set(tempPlan)
          .catch(error => {
            alert(error);
          });
      }
    });

    getPlan();
  };

  return [
    planningList,
    getPlan,
    addPlanItem,
    editPlanItem,
    deletePlanItem,
    setStateNeed,
  ];
};

export default planningHook;
