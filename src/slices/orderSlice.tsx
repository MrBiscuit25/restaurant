import { createSlice, current } from "@reduxjs/toolkit";
import allDishes from "../data/allDishes.json";
const initialState = [];

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addDish: (state, action) => {
      const { category, id } = action.payload;
      const dish = allDishes[category]?.find((dish) => dish.id == id);
      const currentDish = state.find(
        (item) => item.id === id && item.category == category,
      );
      if (!dish.count || !currentDish) {
        const newDish = {
          ...dish,
          count: 1,
          category: dish.category,
          availiable: dish.availiable - 1,
        };
        dish.count = 1;
        state.push(newDish);
      } else {
        if (currentDish && currentDish.availiable >= 1) {
          currentDish.count += 1;
          currentDish.availiable -= 1;
        }
      }
    },
    incrementCount: (state, action, value) => {
      const { category, id } = action.payload;
      const incrementedDish = state.find(
        (item) => item.id === id && item.category == category,
      );
      if (incrementedDish) {
        if (incrementedDish.availiable > 0) {
          incrementedDish.availiable -= 1;
          incrementedDish.count += 1;
        }
      }
    },
    decrementCount: (state, action, value) => {
      const { category, id } = action.payload;
      const decrementDish = state.find(
        (item) => item.id === id && item.category == category,
      );
      if (decrementDish) {
        if (decrementDish.count > 1) {
          decrementDish.availiable += 1;
          decrementDish.count -= 1;
        }
      }
    },
    deleteDish: (state, action) => {
      const { id } = action.payload;
      return state.filter((el) => el.id !== id);
    },
  },
});

export const {
  addDish,
  incrementCount,
  decrementCount,
  deleteDish,
  otherDelete,
} = orderSlice.actions;

export default orderSlice.reducer;
