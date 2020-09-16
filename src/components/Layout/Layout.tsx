import React from 'react';
import { CryptoPrices } from '../CryptoPrices/CryptoPrices';
import { Main, Background, BgLines, Navbar, HomeLink, Content, BgFigure, Footer, FooterTextWrapper } from './components';
import { LayoutProps } from './types';
import Paragraph from '../Shared/Paragraph';

export const Layout = (props: LayoutProps) => <>
  <Main>
    <Background>
      <BgLines></BgLines>
    </Background>

    <Navbar>
      <HomeLink></HomeLink>
    </Navbar>

    <Content>
      <Background>
        <BgFigure></BgFigure>
      </Background>

      <CryptoPrices></CryptoPrices>
    </Content>
  </Main>

  <Footer>
    <FooterTextWrapper>
      <Paragraph size={12} color="black" opacity={0.4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur,
        adipiscing elit, lalala lala. Condimentum mattis pellentesque id nibh tortor. Urna duis convallis convallis tellus id interdum velit. Rutrum quisque non tellus orci.
      </Paragraph>
    </FooterTextWrapper>
  </Footer>
</>

