import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import { motion } from 'framer-motion';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizGalera from '../src/components/QuizGalera';
import Link from '../src/components/Link';

export default function Home() {
    const router = useRouter(); 
    const [name, setName] = useState(''); 

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                <Widget
                  as={motion.section}
                  transition={{ duration: .5 }}
                  variants={{
                    after: {opacity: 1, scale: 1},
                    before: {opacity: 0,  scale: .6},
                  }}
                  initial="before"
                  animate="after"
                >
                    <Widget.Header>
                            <h1>{db.title}</h1>
                        </Widget.Header>
                    <Widget.Content>  
                        <p>{db.description}</p><br/>
                        <form onSubmit={function(e) {
                            e.preventDefault(); 
                            router.push(`/quiz?name=${name}`)
                        }}
                        >
                            <Input 
                                name = 'Nome do usuário'
                                onChange = {(event) => setName(event.target.value)}
                                placeholder="Oi, me diz teu nome?"
                                value={name}
                                maxLength={15}
                           />
                            <Button type="submit" disabled={name.length === 0}>
                                {`Jogar como ${name}`}
                            </Button>
                        </form>
                        
                    </Widget.Content> 
                </Widget>

                <Widget
                as={motion.section}
                transition={{ delay: .5, duration: .5 }}
                variants={{
                  after: {opacity: 1, scale: 1},
                  before: {opacity: 0,  scale: .6},
                }}
                initial="before"
                animate="after"
                >
                  <Widget.Content>
                    <h1>Quizes da Comunidade</h1>
                        <p> Divirta-se com outros quizes realizados na Imersão React e NextJS da Alura:</p>
                         <ul>
                          {db.external.map((linkExterno) => {
                            const [projectName, githubUser] = linkExterno
                              .replace(/\//g, '')
                              .replace('https:', '')
                              .replace('.vercel.app', '')
                              .split('.');  

                            return (
                            <li key={linkExterno}>
                              <QuizGalera
                              as={Link} 
                              href={`/quiz/${projectName}___${githubUser}`}
                              >
                                {`${githubUser}/${projectName}`}
                              </QuizGalera>
                            </li>
                            );
                          })} 
                          </ul>                                          
                        {/*  */}
                    </Widget.Content>
                </Widget>
                <Footer 
                as={motion.footer}
                transition={{ delay: 1, duration: 0.5 }}
                variants={{
                  show: {opacity: 1, y: '0'},
                    hidden: {opacity: 0 , y: '100%'},
                }}
                initial="hidden"
                animate="show"
                />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/lilitbandeira" />
        </QuizBackground>
    );
}
