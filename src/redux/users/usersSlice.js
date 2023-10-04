import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: Boolean,
    error: undefined,
}

const usersSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {

  }
});


export const