import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.extraColor};
    color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 0;
    opacity: .6;
    width: 100%;
    padding: 10px 16px;
    font-weight: bold;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    outline: 0;
    transition: .5s;
    box-shadow: ${({ theme }) => theme.boxShadow};
    cursor: pointer;
    &:hover,
    &:focus {
        opacity: .85;
    }
    &:disabled {
        background-color: ${({ theme }) => theme.colors.mainBg};
        border-radius: ${({ theme }) => theme.borderRadius};
        color: ${({ theme }) => theme.colors.contrastText};
        border: 1px solid ${({ theme }) => theme.colors.extraColor};
        cursor: not-allowed;
    }
`;

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
    children: PropTypes.node.isRequired,
};

export default Button;