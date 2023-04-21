import { createSlice } from '@reduxjs/toolkit';


const lightModeSlice = createSlice({
  name: 'lightMode',
  
  initialState: (() => {
    const localStorageValue = localStorage.getItem("UniqueIDlightMode");
    return localStorageValue !== null ? JSON.parse(localStorageValue) : false;
  })(),

  reducers: {
    changeLightMode: (state) => !state
  }

});

export const { changeLightMode } = lightModeSlice.actions
export default lightModeSlice.reducer;
