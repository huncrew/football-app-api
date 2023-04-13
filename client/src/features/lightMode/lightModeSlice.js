import { createSlice } from '@reduxjs/toolkit';


const lightModeSlice = createSlice({
  name: 'lightMode',
  initialState: JSON.parse(localStorage.getItem("UniqueIDlightMode")) != null ? JSON.parse(localStorage.getItem("UniqueIDlightMode")) : false,
  reducers: {
    changeLightMode: (state) => !state
  }

});

export const { changeLightMode } = lightModeSlice.actions
export default lightModeSlice.reducer;
