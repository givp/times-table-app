// TimesTableGame.js
import React, { useState, useEffect } from 'react';
import './TimesTableGame.css';

const TimesTableGame = () => {
  const [score, setScore] = useState(0);
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [streak, setStreak] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  // Create a new question
  const generateQuestion = () => {
    // Generate random numbers between 2 and 12 (removing 1)
    const newNum1 = Math.floor(Math.random() * 11) + 2;
    const newNum2 = Math.floor(Math.random() * 11) + 2;
    setNum1(newNum1);
    setNum2(newNum2);
    
    const correctAnswer = newNum1 * newNum2;
    
    // Generate 3 unique wrong answers
    let wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      // Generate plausible wrong answers by slightly modifying the correct answer
      // or using other common multiplication results
      let wrongAnswer;
      const rand = Math.random();
      
      if (rand < 0.33) {
        // Add or subtract a small number
        wrongAnswer = correctAnswer + Math.floor(Math.random() * 5) + 1;
      } else if (rand < 0.66) {
        wrongAnswer = correctAnswer - Math.floor(Math.random() * 5) - 1;
        // Ensure we don't have negative answers
        if (wrongAnswer <= 0) wrongAnswer = correctAnswer + 2;
      } else {
        // Use a nearby multiplication result
        const altNum1 = newNum1 + (Math.random() < 0.5 ? 1 : -1);
        const altNum2 = newNum2 + (Math.random() < 0.5 ? 1 : -1);
        wrongAnswer = Math.max(1, altNum1) * Math.max(1, altNum2);
      }
      
      // Only add if it's not the correct answer and not already in wrong answers
      if (wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
        wrongAnswers.push(wrongAnswer);
      }
    }
    
    // Combine correct and wrong answers, then shuffle
    const allOptions = [correctAnswer, ...wrongAnswers];
    for (let i = allOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
    }
    
    setOptions(allOptions);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setShowFeedback(false);
  };

  // Initialize the game
  useEffect(() => {
    generateQuestion();
  }, []);

  // Handle answer selection
  const handleAnswerClick = (answer) => {
    if (showFeedback) return; // Prevent clicking during feedback
    
    const correctAnswer = num1 * num2;
    const correct = answer === correctAnswer;
    
    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(score + 1);
      setStreak(streak + 1);
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 1000);
    } else {
      setScore(Math.max(0, score - 1));
      setStreak(0);
    }
    
    // Wait and then show next question
    setTimeout(() => {
      generateQuestion();
    }, correct ? 1000 : 3000);
  };

  // Background colors based on streaks
  const getBgClass = () => {
    if (streak < 3) return 'streak-bg-1';
    if (streak < 5) return 'streak-bg-2';
    if (streak < 8) return 'streak-bg-3';
    return 'streak-bg-4';
  };

  // Get button class based on state
  const getButtonClass = (option) => {
    let className = 'option-button ';
    
    if (showFeedback) {
      if (option === num1 * num2) {
        className += 'option-correct';
      } else if (option === selectedAnswer && !isCorrect) {
        className += 'option-incorrect';
      } else {
        className += 'option-inactive';
      }
    } else {
      className += 'option-default';
    }
    
    return className;
  };

  return (
    <div className={`game-container ${getBgClass()}`}>
      <div className="game-card">
        <div className="header">
          <h1 className="title">Times Table Fun!</h1>
          <div className="score">
            <span className="score-number">{score}</span>
            <svg className="star-icon" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
        
        <div className="problem-container">
          {showAnimation && (
            <div className="star-animation">
              <div className="animated-star">★</div>
            </div>
          )}
          
          {streak >= 3 && (
            <div className="streak-badge">
              Streak: {streak}! 🔥
            </div>
          )}
          <div className="problem">
            {num1} × {num2} = ?
          </div>
        </div>
        
        <div className="options-grid">
          {options.map((option, index) => (
            <button
              key={index}
              className={getButtonClass(option)}
              onClick={() => handleAnswerClick(option)}
              disabled={showFeedback}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {streak >= 5 && (
        <div className="streak-message">
          <div className="streak-text">Amazing streak of {streak}! Keep it up! 🌟</div>
        </div>
      )}
    </div>
  );
};

export default TimesTableGame;