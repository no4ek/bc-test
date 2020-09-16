
import styled from 'styled-components';

const Paragraph = styled.p<{
  size?: number;
  color?: string;
  opacity?: number;
}>`
  font-size: ${props => !!props.size ? `${props.size}px` : '10px'};
  color: ${props => !!props.color ? props.color : 'black'};
  opacity: ${props => !!props.opacity ? props.opacity : 1};
  padding: 0;
  margin: 0;
`;

export default Paragraph;