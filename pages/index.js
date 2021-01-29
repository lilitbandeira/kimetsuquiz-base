import React from 'react';
import { useRouter } from 'next/router'; 

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

export default function Home() {
    const router = useRouter(); 
    const [name, setName] = React.useState(''); 

    return (
        <QuizBackground backgroundImage={db.bg}>
            <QuizContainer>
                <QuizLogo />
                <Widget>
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
                                {`Vamo jogar, ${name}!`}
                            </Button>
                        </form>
                        
                    </Widget.Content> 
                </Widget>

                <Widget>
                    <Widget.Content>               
                        <h1>Quizes da Galera</h1>                               
                        <p> Muitos quizes com diversos conteúdos incríveis, confere:</p> 

                        <QuizGalera
                          href="https://quiz-cavaleiro-zodiaco.vercel.app/"
                          target="_blank"
                        >
                          Quiz Cavaleiros do zodíaco
                        </QuizGalera>
                        <QuizGalera
                          href="https://rpdr-quiz.vercel.app/"
                          target="_blank"
                        >
                          Quiz Rupaul's Drag Race
                        </QuizGalera>
                        <QuizGalera
                          href="https://quiz-pokemon.vercel.app/"
                          target="_blank"
                        >
                          Quiz Pokémon
                        </QuizGalera>       
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/lilitbandeira/kimetsuquiz-base" />
        </QuizBackground>
    );
}