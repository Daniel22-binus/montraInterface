import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const planningHook = () => {
  const [planningList, setPlanningList] = useState({
    results: [
      {
        id: 0,
        title: 'Trip to Hawai',
        description: 'for 3 days 2 nights',
        needs: [
          {
            id: 0,
            needName: 'Plane Ticket Fee',
            needPrice: 3000000,
            needState: false,
          },
          {
            id: 1,
            needName: 'Hotel',
            needPrice: 3000000,
            needState: true,
          },
          {
            id: 2,
            needName: 'Tourist Guide',
            needPrice: 3000000,
            needState: false,
          },
          {
            id: 3,
            needName: 'Meal Cost',
            needPrice: 3000000,
            needState: true,
          },
          {
            id: 4,
            needName: 'Souvenirs',
            needPrice: 3000000,
            needState: false,
          },
        ],
      },
      {
        id: 1,
        title: 'Dummy',
        description: 'test data',
        needs: [
          {
            id: 0,
            needName: 'needs true',
            needPrice: 50000,
            needState: true,
          },
          {
            id: 1,
            needName: 'needs false',
            needPrice: 50000,
            needState: false,
          },
        ],
      },
    ],
  });

  const setStateNeed = (indexPlan, indexNeed, newState) => {
    const newResults = [...planningList.results];
    newResults[indexPlan].needs[indexNeed].needState = newState;
    setPlanningList({
      results: newResults,
    });
  };

  const addPlanItem = Plan => {
    const newResults = [...planningList.results];
    Plan.id = newResults.length;
    newResults.push(Plan);
    setPlanningList({
      results: newResults,
    });
  };

  const editPlanItem = Plan => {
    const newResults = [planningList.results];
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

  return [planningList, addPlanItem, editPlanItem, deletePlanItem, setStateNeed];
};

export default planningHook;

const styles = StyleSheet.create({});
