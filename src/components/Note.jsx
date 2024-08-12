import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, pinNote } from '../store/notesSlice';

const Note = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <div className={`note ${note.pinned ? 'pinned' : ''}`}>
      {note.title && <h3>{note.title}</h3>}
      <p>{note.content}</p>
      <div className="note-buttons">
        <button onClick={() => dispatch(pinNote(note.id))}>
          {note.pinned ? 'Unpin' : 'Pin'}
        </button>
        <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
      </div>
    </div>
  );
};

export default Note;
