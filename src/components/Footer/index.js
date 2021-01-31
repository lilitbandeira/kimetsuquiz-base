import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.gradientBlue};
  backdrop-filter: blur(3px);
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  box-shadow: ${({ theme }) => theme.boxShadow}; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
  @media (max-width:500px){
      background: ${({ theme }) => theme.gradientGreen2};
      border: 1px solid ${({ theme}) => theme.colors.primary};
    }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por Lilit durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}