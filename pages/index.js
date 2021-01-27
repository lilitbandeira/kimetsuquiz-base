import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router'; 

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
        margin: auto;
        padding: 15px;
    }
`;

export default function Home() {
    const router = useRouter(); 
    const [name, setName] = React.useState(''); 

    return (
        <QuizBackground backgroundImage={db.bg}>
            <Head>
                <title>{db.title}</title>
            </Head>
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
                                name = 'nomeDoUsuario'
                                onChange = {(event) => setName(event.target.value)}
                                placeholder="Oi, me diz teu nome?"
                                value={name}
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
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/lilitbandeira" />
        </QuizBackground>
    );
}