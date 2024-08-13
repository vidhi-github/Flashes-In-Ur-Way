import React, { useState } from 'react';

function Dashboard({ addFlashcard }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() && answer.trim()) {
      addFlashcard(question, answer);
      setQuestion('');
      setAnswer('');
    } else {
      alert("Please fill in both the question and answer.");
    }
  };

  return (
    <div className="dashboard">
      <h2>Add New Flashcard</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Question" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
          required 
        />&nbsp;&nbsp;
        <input 
          type="text" 
          placeholder="Answer" 
          value={answer} 
          onChange={(e) => setAnswer(e.target.value)} 
          required 
        />
        <button type="submit">Add Flashcard</button>
      </form>
    </div>
  );
}

export default Dashboard;
