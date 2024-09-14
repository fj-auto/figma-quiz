import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import './App.css';

import { quizData } from './quiz/ch3.ts';

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(new Array(quizData.length).fill(false));

  useEffect(() => {
    setSelectedAnswers([]);
  }, [currentQuestion]);

  const handleAnswerSelect = index => {
    const question = quizData[currentQuestion];
    let newSelectedAnswers;

    if (question.type === 'multiple') {
      newSelectedAnswers = [...selectedAnswers];
      const answerIndex = newSelectedAnswers.indexOf(index);
      if (answerIndex > -1) {
        newSelectedAnswers.splice(answerIndex, 1);
      } else {
        newSelectedAnswers.push(index);
      }
    } else {
      newSelectedAnswers = [index];
    }

    setSelectedAnswers(newSelectedAnswers);
    const newAnswered = [...answered];
    newAnswered[currentQuestion] = true;
    setAnswered(newAnswered);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach((question, index) => {
      if (answered[index]) {
        const correctAnswers = new Set(question.correctAnswer);
        const selectedAnswerSet = new Set(selectedAnswers);
        if (question.type === 'multiple') {
          if (
            correctAnswers.size === selectedAnswerSet.size &&
            [...correctAnswers].every(value => selectedAnswerSet.has(value))
          ) {
            newScore++;
          }
        } else {
          if (correctAnswers.has(selectedAnswers[0])) {
            newScore++;
          }
        }
      }
    });
    setScore(newScore);
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setScore(0);
    setAnswered(new Array(quizData.length).fill(false));
  };

  const renderQuestion = () => {
    const question = quizData[currentQuestion];
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">{question.question}</h2>
        <p className="text-sm text-red-500">
          {question.type === 'single' && 'Select one answer'}
          {question.type === 'multiple' && 'Select all that apply'}
          {question.type === 'boolean' && 'Select True or False'}
        </p>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-2 px-4 text-left border rounded ${
                selectedAnswers.includes(index) ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Quiz Results</h2>
        <p className="text-lg">
          Your score: {score} out of {quizData.length}
        </p>
        {quizData.map((question, index) => (
          <div key={index} className="border p-4 rounded">
            <p className="font-semibold">{question.question}</p>
            <p className="text-green-600">
              Correct answer(s): {question.correctAnswer.map(i => question.options[i]).join(', ')}
            </p>
            {answered[index] && (
              <p
                className={
                  question.type === 'multiple'
                    ? new Set(question.correctAnswer).size === new Set(selectedAnswers).size &&
                      question.correctAnswer.every(value => selectedAnswers.includes(value))
                      ? 'text-green-600'
                      : 'text-red-600'
                    : question.correctAnswer.includes(selectedAnswers[0])
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                Your answer(s): {selectedAnswers.map(i => question.options[i]).join(', ')}
              </p>
            )}
            <p className="text-gray-600 mt-2">{question.explanation}</p>
          </div>
        ))}
        <button onClick={handleRestart} className="w-full p-2 bg-blue-500 text-white rounded">
          Restart Quiz
        </button>
      </div>
    );
  };

  return (
    <div className="w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow text-left">
      <h1 className="text-2xl font-bold mb-8">Figma Interface Quiz</h1>
      {!showResults ? (
        <>
          {renderQuestion()}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestion === quizData.length - 1}
              className="flex items-center px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="mt-4">
            <p className="text-center">
              Question {currentQuestion + 1} of {quizData.length}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{
                  width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!answered.every(Boolean)}
            className="w-full mt-4 p-2 bg-green-500 text-white rounded disabled:opacity-50"
          >
            Submit Answers
          </button>
        </>
      ) : (
        renderResults()
      )}
    </div>
  );
};

export default App;
