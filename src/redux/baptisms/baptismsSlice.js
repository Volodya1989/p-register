import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "redux/auth/operations";

import { fetchBaptisms, deleteBaptism, addBaptism } from "./operations";
// import Notiflix from "notiflix";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const baptismsSlice = createSlice({
  name: "baptisms",
  initialState: {
    baptisms: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchBaptisms.pending]: handlePending,
    [fetchBaptisms.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.baptisms = action.payload;
    },
    [fetchBaptisms.rejected]: handleRejected,
    [fetchBaptisms.rejected]: handleRejected,
    [addBaptism.pending]: handlePending,
    [addBaptism.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.baptisms.listBaptisms.push(action.payload);
      state.baptisms.total = state.baptisms.listBaptisms.length;
    },
    [addBaptism.rejected]: handleRejected,
    [deleteBaptism.pending]: handlePending,
    [deleteBaptism.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.baptisms = state.baptisms.find(
        (item) => item.id !== action.payload.id
      );
      // Notiflix.Notify.success(`Baptism was successfully DELETED.`);
    },
    [logOut.fulfilled](state) {
      state.baptisms = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});
export const baptismsReducer = baptismsSlice.reducer;
