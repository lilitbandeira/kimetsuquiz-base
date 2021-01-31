import styled from 'styled-components';
import db from '../../../db.json';

const Widget = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid ${({ theme}) => theme.colors.primary}; 
    border-color: ${(props) => props.border || db.theme.colors.primary};
    background: ${(props) => props.bg || db.theme.gradientBlue};
    backdrop-filter: blur(4px);
    border-radius: 4px;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.boxShadow}; 

    h1, h2, h3 {
        font-size: 18px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }
    p {
        font-size: 16px;
        text-align: justify;
        font-weight: 400;
        line-height: 1;
    }
    @media (max-width:500px){
      background: ${({ theme }) => theme.gradientGreen2};
    }
`;
Widget.Header = styled.header` 
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background: ${(props) => props.bg || db.theme.gradientGreen}; 
    backdrop-filter: blur(3px);
    letter-spacing: 1px;
    text-transform: uppercase;
    * {
        margin: 0;
    }
    @media (max-width:500px){
        background: ${({ theme }) => theme.gradientBlue};
      }
`;

Widget.Content = styled.div`  
    padding: 24px 32px 32px 32px;
    & > *:firts-child {
        margin-top: 0;
    } 
    & > *::last-child {
        margin-bottom: 0;
    }
    ul {
        list-style: none;
        padding: 0;
    }   
`; 

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background: ${(props) => props.bg || `${db.theme.colors.primary}70`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => `${theme.colors.extraColor}60`};
  }
`;

export default Widget;