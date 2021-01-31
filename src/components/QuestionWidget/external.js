import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Widget from '../../../src/components/Widget';
import Button from '../../../src/components/Button';
import AlternativesForm from '../../../src/components/AlternativesForm';
import BackLinkArrow from '../../../src/components/BackLinkArrow';

export default function ExternalQuiz({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
  other,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;


  return (
    <>
      <Widget
        border={other.theme.colors.primary}
        as={motion.section}
        transition={{ delay: 0, duration: 0.5 }}
        variants={{
          show: {opacity: 1, y: '0'},
          hidden: {opacity: 0 , y: '100%'},
        }}
        initial="hidden"
        animate="show"
      >
        <Widget.Header bg={other.theme.colors.primary}>
          <BackLinkArrow href="/"/>
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
            bg={other.theme.colors.secondary}
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
                  bg={other.theme.colors.primary}
                  other={other}
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
    </>
  );
}