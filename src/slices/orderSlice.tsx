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
      if (!dish.count) {
        dish.count = 1;
        dish.category = category;
        state.push(dish);
      } else {
        const currentDish = state.find((item) => item.id === id);
        if (currentDish) {
          if (currentDish.count < currentDish.availiable) {
            currentDish.count += 1;
          } else {
            return;
          }
        }
      }
    },
    incrementCount: (state, action, value) => {
      const { category, id } = action.payload;
      const incrementedDish = state.find(
        (item) => item.id === id && item.category == category,
      );
      if (incrementedDish) {
        if (incrementedDish.availiable - 1 > 0) {
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
        if (decrementDish.count > 1) decrementDish.count -= 1;
      }
    },
    deleteDish: (state, action) => {
      const { id } = action.payload;
      return state.filter((el) => el.id !== id);
    },
  },
});

export const { addDish, incrementCount, decrementCount, deleteDish } =
  orderSlice.actions;

export default orderSlice.reducer;
