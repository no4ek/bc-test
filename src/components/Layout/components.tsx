import styled from "styled-components";
import linesImg from '../../images/bg.png';
import logoImg from '../../images/logo.svg';
import figureImg from '../../images/figure.png';

const NAVBAR_HEIGHT = '100px';

export const Navbar = styled.div`
  display: flex;
  height: ${NAVBAR_HEIGHT};
  align-items: center;
  padding: 0 8%;
`;

export const HomeLink = styled.a`
  &:before {
    content: url(${logoImg})
  }
`;

export const Main = styled.div`
  position: relative;
  background-color: #2e1159;
  width: 100vw;
  height: 85vh;
`;

export const Content = styled.div`
  position: relative;
  height: calc(100% - ${NAVBAR_HEIGHT});
`;

export const Footer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
// height: 100%;
align-items: center;

position: relative;
  height: 15vh;
  width: 100vw;
  background-color: white;
`;

export const FooterTextWrapper = styled.div`
  width: 80%;
`;

export const Background = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const BgLines = styled.div`
  background: url(${linesImg});
  width: 25%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BgFigure = styled.div`
  background: url(${figureImg});
  width: 100%;
  height: 95%;
  align-self: flex-end;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;