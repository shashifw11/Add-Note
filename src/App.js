import React from 'react';
import AddNoteForm from './components/AddNoteForm';
import NoteList from './components/NoteList';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <AddNoteForm />
        <NoteList />
      </div>
    </div>
  );
};

export default App;
