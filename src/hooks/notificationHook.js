import {useState} from 'react';
import firebase from '../../firebase';
import {objectToList} from '../logic/firebaseFunction';
import {notification} from '../Notification';

const notificationHook = () => {
  const [notifList, setNotifList] = useState({
    results: [],
  });

  const path = '/notification/' + firebase.auth().currentUser?.uid;

  const getNotif = async () => {
    await firebase
      .database()
      .ref(path)
      .once('value')
      .then(snapshot => {
        if (snapshot) {
          setNotifList({
            results: snapshot.val(),
          });
        }
      });
  };

  const addNotif = (str, date) => {
    let tempId = 0;

    if (notifList.results) {
      let temp = objectToList(notifList.results);
      tempId = temp.length;
    }

    firebase
      .database()
      .ref(path)
      .push({
        id: tempId,
        description: str,
      })
      .then(() => {
        getNotif();
        notification.configure();
        notification.createChannel('1');

        if (date) {
          notification.sendNotifFiveLater('1', str);
          // notification.sendNotifSchedule('1', date, str);
        } else {
          notification.sendNotif('1', str);
        }
      })
      .catch(error => {
        alert(error);
      });
  };

  const deleteNotif = key => {
    const tempResults = notifList.results;

    objectToList(tempResults).map(notif => {
      if (tempResults[notif].id == key) {
        firebase
          .database()
          .ref(path + '/' + notif)
          .remove()
          .catch(error => {
            alert(error);
          });
      } else if (tempResults[notif].id > key) {
        let temp = tempResults[notif];
        temp.id -= 1;
        firebase
          .database()
          .ref(path + '/' + notif)
          .set(temp)
          .catch(error => {
            alert(error);
          });
      }
    });
    getNotif();
  };

  const deleteAllNotif = () => {
    firebase
      .database()
      .ref(path)
      .remove()
      .then(() => {
        getNotif();
      })
      .catch(error => {
        alert(error);
      });
  };

  return [notifList, getNotif, addNotif, deleteNotif, deleteAllNotif];
};

export default notificationHook;
