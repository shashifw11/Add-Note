import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../store/notesSlice';

const AddNoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleTitleClick = () => {
    setIsExpanded(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() || title.trim()) {
      dispatch(addNote({
        id: Date.now(),
        title,
        content,
        pinned: false,
      }));
      setTitle('');
      setContent('');
      setIsExpanded(false); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onClick={handleTitleClick}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isExpanded && (
        <>
          <textarea
            placeholder="Take a note..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button type="submit">Close</button>
        </>
      )}
    </form>
  );
};

export default AddNoteForm;
