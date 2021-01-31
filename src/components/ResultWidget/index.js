import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import BackLinkArrow from '../../../src/components/BackLinkArrow';
import Widget from '../Widget';

import { useRouter } from 'next/router';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    justify-content: center;
    align-items: center;

    h3 {
    font-weight: 700;
    letter-spacing: .5px;
    margin-bottom: -10px;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme}) => theme.colors.extraColor};
    };
    
    p {
    font-weight: 600;
    letter-spacing: .5px;
    margin-bottom: -2px;
    font-size: 18px;
    text-align: center;
    color: ${({ theme}) => theme.colors.extraColor};
    };

    li {
      font-size: 16px;
      padding: 4px 0px;
      letter-spacing: .3px;
      font-weight: 300;
    };

    #good {
      color: ${({ theme}) => theme.colors.success};
    }
    #bad {
      color: ${({ theme}) => theme.colors.secondary};
    }
`;

const Anima = styled.section`
    width: 100%;
    height: 28vh;
    margin: 0 auto;
    background-image: url(https://media.giphy.com/media/TGdIZ9iGJxbphGrb6V/giphy.gif);
    background-position: center;
    background-size: cover;
`;

export default function ResultWidget({ results }) {
  const router = useRouter();
  const { name } = router.query;
  const finalResult = results.filter((x) => x).length * 10;
  const totalQuestion = results.length * 10;

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0, duration: .5 }}
      variants={{
        after: {opacity: 1, scale: 1},
        before: {opacity: 0,  scale: .6},
      }}
      initial="before"
      animate="after"
    >
      <Widget.Header>
        Veja seu desempenho
      </Widget.Header>
        
      <Widget.Content>
        <Anima />
        <Container>
          <h3>
            {`${finalResult === 0 ? 'Poxa,' : 'Muito bom,'} ${name}! `}
          </h3>
          <p>
            {finalResult === 0 ? 'Você errou tudo!!!' : `Você fez ${finalResult} de ${totalQuestion} pontos`}
          </p>
            <ul>
                {results.map((result, index) => (
                  <li key={`result__${result}`}>
                    Questão {index + 1}:   
                    {result === true
                      ? <>   <i id="good" class="fas fa-check"></i></> 
                      : <>   <i id="bad" class="fas fa-times"></i></>}
                  </li>
                ))}     
            </ul>
            <BackLinkArrow href="/"/>       
        </Container>
      </Widget.Content>
    </Widget>
  );
} 