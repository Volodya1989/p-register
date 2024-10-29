import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://p-register-server.onrender.com";
// axios.defaults.baseURL = "http://localhost:3001";
const baseBaptismURL = "/api/baptisms";

export const fetchBaptisms = createAsyncThunk(
  "baptisms/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(baseBaptismURL);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchOneBaptism = createAsyncThunk(
  "baptisms/fetchOneBaptism",
  async (baptismId, thunkAPI) => {
    try {
      const response = await axios.get(`${baseBaptismURL}${baptismId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteBaptism = createAsyncThunk(
  "baptisms/deleteBaptism",
  async (baptismId, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseBaptismURL}${baptismId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addBaptism = createAsyncThunk(
  "baptisms/addBaptism",
  async (
    {
      sacrament,
      certificate,
      baptism,
      eucharist,
      dateSacramentPerformed,
      neophyte,
      mother,
      father,
      godParent_1,
      godParent_2,
      priest,
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(baseBaptismURL, {
        sacrament,
        certificate,
        baptism,
        eucharist,
        dateSacramentPerformed,
        neophyte,
        mother,
        father,
        godParent_1,
        godParent_2,
        priest,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
