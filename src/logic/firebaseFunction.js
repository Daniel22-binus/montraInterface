const objectToList = objectKeys => {
  let keyFirebase = [];
  if (objectKeys) {
    keyFirebase = Object.keys(objectKeys);
  }
  return keyFirebase;
};

export {objectToList};
