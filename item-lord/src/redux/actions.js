// actions.js
export const stayDay = () => ({
  type: "STAY_DAY",
});

export const addCash = (amount) => ({
  type: "ADD_CASH",
  payload: amount,
});

export const updatePocket = (pocket) => ({
  type: "UPDATE_POCKET",
  payload: pocket,
});

export const selectItem = (itemName) => ({
  type: "SELECT_ITEM",
  payload: itemName,
});
