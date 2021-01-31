/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import QuizScreen from '../../src/screens/Quiz';
import { ThemeProvider } from 
'styled-components';

export default function QuizDaGaleraPage({ dbExterno }) {
  return (
        <ThemeProvider theme={dbExterno.theme}>
          <QuizScreen dbExterno={dbExterno}/>
        </ThemeProvider>
  )
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then((responseObject) => responseObject)
    return {
      props: {
        dbExterno,
      }, 
    };
  } catch(err) {
  throw new Error(err);
  }
}