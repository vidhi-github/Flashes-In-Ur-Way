import React, { useState } from 'react';
import FlashcardList from './components/FlashcardList';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: 'What is React?', answer: 'A JavaScript library for building user interfaces.' },
    { id: 2, question: 'What is JSX?', answer: 'A syntax extension for JavaScript.' },
  ]);

  const addFlashcard = (question, answer) => {
    const newFlashcard = { id: flashcards.length + 1, question, answer };
    setFlashcards([...flashcards, newFlashcard]);
  };

  const editFlashcard = (id, updatedQuestion, updatedAnswer) => {
    const updatedFlashcards = flashcards.map(card =>
      card.id === id ? { ...card, question: updatedQuestion, answer: updatedAnswer } : card
    );
    setFlashcards(updatedFlashcards);
  };

  const deleteFlashcard = (id) => {
    const updatedFlashcards = flashcards.filter(card => card.id !== id);
    setFlashcards(updatedFlashcards);
  };

  return (
    <div className="App">
      <div className="dashboard">
        <h1>Flashcard Learning Tool</h1>
        <Dashboard addFlashcard={addFlashcard} />
        <FlashcardList 
          flashcards={flashcards} 
          editFlashcard={editFlashcard} 
          deleteFlashcard={deleteFlashcard} 
        />
      </div>
    </div>
  );
}

export default App;

