// original state
const state = {
  name: "Lernantino",
  email: "lernantino@gmail.com",
};

import { reducer } from "../utils/reducers";

// create a new version of state by making a copy of the original state's data and updating only the part that has changed
const updatedState = { ...state, email: "lernantino99@gmail.com" };

// test products
test("UPDATE_PRODUCTS", () => {
  let newState = reducer(initialState, {
    type: UPDATE_PRODUCTS,
    products: [{}, {}],
  });

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});
