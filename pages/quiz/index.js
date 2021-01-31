import React, { useState, useEffect } from 'react';

import db from '../../db.json';

import QuizLogo from '../../src/components/QuizLogo';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import LoadingWidget from '../../src/components/LoadingWidget';
import ResultWidget from '../../src/components/ResultWidget';
import QuestionWidget from '../../src/components/QuestionWidget';
import GitHubCorner from '../../src/components/GitHubCorner';

export default function QuizPage() {
  const [screenState, setScreenState] = useState('LOADING'); 
  const [results, setResults] = useState([]); 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
    setScreenState('LOADING');
  } 

  useEffect(() => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion === totalQuestions) {
      setScreenState('RESULT');
    } else {
      setTimeout(() => {
      setScreenState('QUIZ');
      }, 1.5 * 1000);
    }
  }, [results]);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState('RESULT');
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
          {screenState === 'LOADING' && <LoadingWidget />}
          {screenState === 'QUIZ' && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === 'RESULT' && <ResultWidget results={results} />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lilitbandeira" />
    </QuizBackground>
  ); 
}
