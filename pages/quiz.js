import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/Button';
import LoadingWidget from '../src/components/LoadingWidget';
import ResultWidget from '../src/components/ResultWidget';
import AlternativesForm from '../src/components/AlternativesForm';


function QuestionWidget({ 
    question, 
    questionIndex,
    totalQuestions,
    onSubmit,
    addResult,
  }) {
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined); 
    const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
    const questionId = `question__${questionIndex}`;
    const isCorrect = selectedAlternative === question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined;


    return (
      <Widget>
        <Widget.Header>
          <h3>
            {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
          </h3> 
        </Widget.Header>
  
        <img
          alt="Descrição"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src={question.image}
        />
        <Widget.Content>
          <h2>
            {question.title}
          </h2>
          <p>
            {question.description}
          </p>
          <AlternativesForm
            onSubmit={(evento) => {
              evento.preventDefault();
              setIsQuestionSubmited(true);
              setTimeout(() => { 
                addResult(isCorrect);
                onSubmit();
                setIsQuestionSubmited(false);
                setSelectedAlternative(undefined);
              }, 1 * 1000)
              
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
              const isSelected = selectedAlternative === alternativeIndex;
              return (
                <Widget.Topic
                  as="label" 
                  key={alternativeId} 
                  htmlFor={alternativeId}
                  data-selected={isSelected}
                  data-status={isQuestionSubmited && alternativeStatus}
                >
                  <input
                    style={{ display: 'none' }}
                    id={alternativeId}
                    name={questionId}
                    onChange={() => setSelectedAlternative(alternativeIndex)}
                    type="radio"
                  />
                  {alternative}
                </Widget.Topic>
              );
            })}
  
            <Button type="submit" disable={!hasAlternativeSelected}>
              Confirmar
            </Button>
          </AlternativesForm>
        </Widget.Content>
      </Widget>
    );
  }
  
  const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
  };
  
  export default function QuizPage() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING); 
    const [results, setResults] = React.useState([]); 
    const totalQuestions = db.questions.length;
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];
  
    function addResult(result) {
      setResults([
        ...results,
        result,
      ]);
    } 
    React.useEffect(() => {
      setTimeout(() => {
       setScreenState(screenStates.QUIZ);
      }, 1 * 1000);
    }, []);
  
    function handleSubmitQuiz() {
      const nextQuestion = questionIndex + 1;
      if (nextQuestion < totalQuestions) {
        setCurrentQuestion(nextQuestion);
      } else {
        setScreenState(screenStates.RESULT);
      }
    }
  
    return (
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              onSubmit={handleSubmitQuiz}
              addResult={addResult}
            />
          )}
  
          {screenState === screenStates.LOADING && <LoadingWidget />}
  
          {screenState === screenStates.RESULT && <ResultWidget results={results} />}
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/lilitbandeira/kimetsuquiz-base" />
      </QuizBackground>
    ); 
  }

