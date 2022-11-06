import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { data: [], total: 0, initialValue: 0 };

const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    totalPrice(state, action) {
      state.data.push(action.payload);
      state.total = state.data.reduce((prevValue, currValue) => prevValue + currValue, state.initialValue);
      console.log(current(state));
      return state;
    },
  },
});

export const { totalPrice } = totalPriceSlice.actions;
export default totalPriceSlice.reducer;
