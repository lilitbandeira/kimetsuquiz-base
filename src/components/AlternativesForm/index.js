import styled from 'styled-components';

const AlternativesForm = styled.form`
  @keyframes flash1 {
    0%, 50%, 100% {
      background-color: ${({ theme }) => theme.colors.success};
    }
    25%, 75%
    {
      background-color: #008B45;
    }
  }

  @keyframes flash2 {
    0%, 50%, 100% {
      background-color: ${({ theme }) => theme.colors.wrong};
    }
    25%, 75%
    {
      background-color: #9d0025;
    }
  }
  
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => `${theme.colors.extraColor}80`};
      
      &[data-status="SUCCESS"] {
        animation: flash1 .4s infinite;
      }
      &[data-status="ERROR"] {
        animation: flash2 .4s infinite;
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;