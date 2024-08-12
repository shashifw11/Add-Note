import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';

const NoteList = () => {
  const notes = useSelector((state) => state.notes);

  const pinnedNotes = notes.filter(note => note.pinned);
  const unpinnedNotes = notes.filter(note => !note.pinned);

  return (
    <div className="note-list">
      {pinnedNotes.concat(unpinnedNotes).map(note => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
