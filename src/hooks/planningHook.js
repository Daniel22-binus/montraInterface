import {useState} from 'react';
import firebase from '../../firebase';

const planningHook = () => {
  const [planningList, setPlanningList] = useState({
    results: [],
  });

  const setStateNeed = (indexPlan, indexNeed, newState) => {
    const newResults = [...planningList.results];
    newResults[indexPlan].needs[indexNeed].needState = newState;
    setPlanningList({
      results: newResults,
    });
  };

  const getPlan = async () => {
    let tempResults = [];
    await firebase
      .database()
      .ref('/PlanningList')
      .once('value')
      .then(snapshot => {
        //function ini looping forever
        if (snapshot) {
          // console.log('=====================================');
          // setPlanningList({
          //   results: snapshot.val(),
          // });

          tempResults = snapshot.val();
          // Object.keys(tempResults).map(item => {
          //   let needList = tempResults[item].needs;

          //   console.log(needList);
          // });
        }
      });

    setPlanningList({
      results: tempResults,
    });
  };

  const addPlanItem = Plan => {
    // const newResults = [...planningList.results];
    // Plan.id = newResults.length;
    // newResults.push(Plan);
    // setPlanningList({
    //   results: newResults,
    // });

    let temp = Object.keys(planningList.results);
    Plan.id = temp.length;

    firebase
      .database()
      .ref('/PlanningList')
      .push(Plan)
      .then(() => {
        alert('success add new Planning');
      })
      .catch(error => {
        alert(error);
      });

    getPlan();
  };

  const editPlanItem = Plan => {
    const newResults = [...planningList.results];
    newResults[Plan.id] = Plan;
    setPlanningList({
      results: newResults,
    });
  };

  const deletePlanItem = key => {
    const newResults = [...planningList.results];
    newResults.splice(key, 1);

    newResults.map(plan => {
      if (plan.id > key) {
        plan.id = plan.id - 1;
      }
    });

    setPlanningList({
      results: newResults,
    });
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
