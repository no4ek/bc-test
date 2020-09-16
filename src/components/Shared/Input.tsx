import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  position: absolute;
  top: 7px;
  display: block;
  transition: 0.2s;
  font-size: 16px;
  color: darkgray;
  padding: 0 6px;
  left: 10px;
  pointer-events:none;
`;

const InputElement = styled.input`
  border: 1px solid lightgray;
  border-radius: 4px;
  background-color: transparent;
  padding: 10px 3px 10px 14px;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;

  &::placeholder {
    color: transparent;
  }

  &:focus ~ ${Label},  &:not(:placeholder-shown) ~ ${Label} {
    position: absolute;
    top: -5px;
    background-color: white;
    display: block;
    transition: 0.2s;
    font-size: 8px;
    transition: all 0.2s ease;
    text-transform: uppercase;
  }
`;

type InputProps = {
  value: string;
  type: string;
  label: string;
  onChange: (value: string) => void;
}

const Input = ({ value, type, label, onChange, ...props }: InputProps) => {
  return (
    <InputContainer>
      <InputElement placeholder={label || " "} value={value} type={type} onChange={e => onChange(e.target.value)} {...props}></InputElement>
      {label && <Label>{label}</Label>}
    </InputContainer>
  )
}

export default Input