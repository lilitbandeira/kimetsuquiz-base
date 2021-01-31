import styled from 'styled-components';

const QuizGalera = styled.a.attrs('href', 'target')`
    display: block;
    background-color: ${({ theme }) => `${theme.colors.primary}70`};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.extraColor};
    font-size: 16px;
    font-weight: 400;
    padding: 8px 10px;
    margin-bottom: 15px;
    border-radius: 4px;
    transition: 1s;
    box-shadow: ${({ theme }) => theme.boxShadow};
    &:hover,
    &:focus {
        background-color: ${({ theme }) => `${theme.colors.secondary}80`};
    }
`;

export default QuizGalera;