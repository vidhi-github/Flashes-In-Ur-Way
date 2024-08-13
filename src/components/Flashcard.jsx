import React, { useState } from 'react';
import './Flashcard.css';

function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          {flashcard.question}
        </div>
        <div className="flashcard-back">
          <div className="flashcard-back-content">
            {flashcard.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;



