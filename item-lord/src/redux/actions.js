// actions.js
export const stayDay = () => ({
    type: 'STAY_DAY',
  });

export const addCash = (amount) => ({
    type: 'ADD_CASH',
    payload: amount,
  });
  
  export const removeTask = (taskId) => ({
    type: 'REMOVE_TASK',
    payload: taskId,
  });

  export const updatePocket = (pocket) => ({
    type: 'UPDATE_POCKET',
    payload: pocket,
  });



  