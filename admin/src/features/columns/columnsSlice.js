// src/features/columns/columnsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userColumns: [
    { field: "_id", headerName: "ID", width: 70 },
    // ... other user column definitions
  ],
  hotelColumns: [
    { field: "_id", headerName: "ID", width: 250 },
    // ... other hotel column definitions
  ],
  roomColumns: [
    { field: "_id", headerName: "ID", width: 70 },
    // ... other room column definitions
  ],
};

const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {},
});

export const selectColumns = (state) => state.columns;
export default columnsSlice.reducer;
    