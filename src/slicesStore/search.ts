import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",


  initialState: {
    search: "",
    searchActive: false,
    resultSearch: []
  },

  reducers: {
    resetResultSearch: (state) => {
      state.resultSearch = []
    },
    resetSearch: (state) => {
      state.search = ""
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
    searchActiveTrue: (state) => {
      state.searchActive = true
    },
    searchActiveFalse: (state) => {
      state.searchActive = false
    },
    setResultSearch: (state, action) => {
      state.resultSearch = action.payload
    }
  }
})

export const { resetResultSearch, setResultSearch, resetSearch, setSearch, searchActiveTrue, searchActiveFalse } = searchSlice.actions

export default searchSlice.reducer