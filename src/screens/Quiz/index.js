import React, { useState, useEffect } from 'react';

import QuizLogo from '../../../src/components/QuizLogo';
import QuizBackground from '../../../src/components/QuizBackground';
import QuizContainer from '../../../src/components/QuizContainer';
import LoadingWidget from '../../../src/components/LoadingWidget';
import ResultWidget from '../../../src/components/ResultWidget';
import GitHubCorner from '../../../src/components/GitHubCorner';
import ExternalQuiz from '../../../src/components/QuestionWidget/external';

export default function QuizesPage({ dbExterno }) {
  const [screenState, setScreenState] = useState('LOADING'); 
  const [results, setResults] = useState([]); 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = dbExterno.questions[questionIndex];
  const totalQuestions = dbExterno.questions.length;

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
    <QuizBackground backgroundImage={dbExterno.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === 'LOADING' && <LoadingWidget />}
        {screenState === 'QUIZ' && (
          <ExternalQuiz
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
            other={dbExterno}
          />
        )}
        {screenState === 'RESULT' && <ResultWidget results={results} />}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lilitbandeira" />
    </QuizBackground>
  ); 
}