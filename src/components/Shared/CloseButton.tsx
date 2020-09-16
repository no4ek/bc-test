import styled from "styled-components";

export const CloseButton = styled.a`
  opacity: 0.4;
  position: relative;
  left: -6px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before, &:after {
    position: absolute;
    content: ' ';
    height: 12px;
    width: 2px;
    background-color: white;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

export default CloseButton;