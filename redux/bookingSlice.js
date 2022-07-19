import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "052682665",
  fullName: "saar",
  dateSelected: "",
  timeSelected: "",
  hairCutSelected: "",
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state = action.payload;
      console.log("addAppointment", action);
    },
    // setPhone(state, action) {
    //   //   console.log(action);
    //   // state.phone = action.payload;
    // },
    setDateSelected: (state, action) => {
      state.dateSelected = action.payload;

      console.log("setDateSelected", action);
    },
    setTimeSelected: (state, action) => {
      state.timeSelected = action.payload;

      console.log("setTimeSelected", action);
    },
    setHairCutSelected: (state, action) => {
      state.hairCutSelected = action.payload;

      console.log("setHairCutSelected", action);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPhone,
  setDateSelected,
  setHairCutSelected,
  addAppointment,
  setTimeSelected,
} = bookingSlice.actions;

export default bookingSlice.reducer;
