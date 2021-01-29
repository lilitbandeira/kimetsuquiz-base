import styled from 'styled-components';

const QuizGalera = styled.a.attrs('href', 'target')`
    display: block;
    color: ${({ theme }) => theme.colors.extraColor};
    background-color: ${({ theme }) => `${theme.colors.contrastText}30`};
    font-size: 15px;
    font-weight: 400;
    padding: 7px 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    text-decoration: none;
    transition: .25s;
    box-shadow: ${({ theme }) => theme.boxShadow};
    &:hover,
    &:focus {
        background-color: ${({ theme }) => `${theme.colors.secondary}60`};
    }
`;

export default QuizGalera;