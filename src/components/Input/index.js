import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputStyle = styled.input`
    width: 100%;
    padding: 15px;
    font-size: 14px;
    font-weight: 300;
    border: 1px solid ${({ theme }) => theme.colors.extraColor};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: 0;
    margin-bottom: 25px;
    box-shadow: ${({ theme }) => theme.boxShadow};    
`;

export default function Input({ onChange, placeholder, ...props }) {  
    return ( 
        <div> 
            <InputStyle
            placeholder={placeholder}
            onChange={onChange}
            {...props}
            />
        </div> 
    ) 
}

Input.defaultProps = {
    value: "",
};

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string, 
} 