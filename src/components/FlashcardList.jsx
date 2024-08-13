import React, { useState } from 'react';
import Flashcard from './Flashcard';

function FlashcardList({ flashcards, editFlashcard, deleteFlashcard }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState('');
  const [editedAnswer, setEditedAnswer] = useState('');

  const nextCard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsEditing(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsEditing(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditedQuestion(flashcards[currentIndex].question);
    setEditedAnswer(flashcards[currentIndex].answer);
  };

  const handleSave = () => {
    editFlashcard(flashcards[currentIndex].id, editedQuestion, editedAnswer);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteFlashcard(flashcards[currentIndex].id);
    if (currentIndex === flashcards.length - 1 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      {flashcards.length > 0 && (
        <>
          {isEditing ? (
            <div>
              <input 
                type="text" 
                value={editedQuestion} 
                onChange={(e) => setEditedQuestion(e.target.value)} 
              />&nbsp;&nbsp;
              <input 
                type="text" 
                value={editedAnswer} 
                onChange={(e) => setEditedAnswer(e.target.value)} 
              />
              <button onClick={handleSave}>Save</button>
            </div>
          ) : (
            <Flashcard flashcard={flashcards[currentIndex]} />
          )}
          <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button onClick={prevCard} disabled={currentIndex === 0}>Previous</button>&nbsp; &nbsp; &nbsp;
          <button onClick={nextCard} disabled={currentIndex === flashcards.length - 1}>Next</button>&nbsp; &nbsp; &nbsp;
          <button onClick={handleEdit}>Edit</button>&nbsp; &nbsp; &nbsp;
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}

export default FlashcardList;


