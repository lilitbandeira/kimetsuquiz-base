import React from 'react';
import styled, { keyframes } from 'styled-components';
import Widget from '../Widget';

const rotating = keyframes`
    0%, 50%, 100% {
        top: 8px;
        height: 64px;
    }
    25%, 75% {
        top: 24px;
        height: 32px;
    }
`;

const FlexContainer = styled.div`
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;
`;

const FlexItem = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    
    div{
        display: inline-block;
        background: ${({ theme }) => theme.colors.extraColor};
        position: absolute;
        width: 8px; 
        left: 0px;               
        animation: ${rotating} 1.5s cubic-bezier(0, 1, 1, 2) infinite;
    }
    div:nth-child(1) {
        left: 4px;
        animation-delay: -0.30s;
    }
    div:nth-child(2) {
        left: 16px;
        animation-delay: -0.24s;
    }
    div:nth-child(3) {
        left: 28px;
        animation-delay: -0.18s;
    }
    div:nth-child(4) {
        left: 40px;
        animation-delay: -0.12s;
    }
    div:nth-child(5) {
        left: 52px;
        animation-delay: -0.06s;
    }
    div:nth-child(6) {
        left: 64px;
        animation-delay: 0;
    }
`;

export default LoadingWidget => {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>
        
      <Widget.Content>
        <FlexContainer>
          <FlexItem>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />      
          </FlexItem>
        </FlexContainer>
      </Widget.Content>
    </Widget>
  );
}