import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const planningHook = () => {
  const [planningList, setPlanningList] = useState({
    results: [
      {
        id: 1,
        title: 'Trip to Hawai',
        description: 'for 3 days 2 nights',
        price: 15000000,
        needs: [
          {
            id: 1,
            needName: 'Plane Ticket Fee',
            needState: false,
          },
          {
            id: 2,
            needName: 'Hotel',
            needState: true,
          },
          {
            id: 3,
            needName: 'Tourist Guide',
            needState: false,
          },
          {
            id: 4,
            needName: 'Meal Cost',
            needState: true,
          },
          {
            id: 5,
            needName: 'Souvenirs',
            needState: false,
          },
        ],
      },
      {
        id: 2,
        title: 'Dummy',
        description: 'test data',
        price: 100000,
        needs: [
          {
            id: 1,
            needName: 'needs true',
            needState: true,
          },
          {
            id: 2,
            needName: 'needs false',
            needState: false,
          },
        ],
      },
    ],
  });

  const setState = () => {};

  return [planningList, setState];
};

export default planningHook;

const styles = StyleSheet.create({});
