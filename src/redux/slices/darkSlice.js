import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkmode: JSON.parse(localStorage.getItem('dark') || false )
}

const darkSlice = createSlice({
  name: 'dark',
  initialState,
  reducers: {
    on:(state) => {
        state.darkmode = !state.darkmode;
        localStorage.setItem('dark',JSON.stringify(state.darkmode))
        
    },
    

    
    
  }
});

export const {on} = darkSlice.actions

export default darkSlice.reducer