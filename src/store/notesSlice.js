import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },
    pinNote: (state, action) => {
      const note = state.find(note => note.id === action.payload);
      if (note) note.pinned = !note.pinned;
    },
  },
});

export const { addNote, deleteNote, pinNote } = notesSlice.actions;
export default notesSlice.reducer;
