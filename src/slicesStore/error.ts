import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    error: ""
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
    ressetError: (state) => {
      state.error = ""
    }
  }
})

export const { setError, ressetError } = errorSlice.actions

export default errorSlice.reducer