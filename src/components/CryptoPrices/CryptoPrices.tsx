import React from 'react';
import Paragraph from '../Shared/Paragraph';
import { gql, useLazyQuery } from '@apollo/client';
import CloseButton from '../Shared/CloseButton';
import { MainContainer, ContainerWrapper, PricesListContainer, LeftContainer, PricesList, Icon, Price, PricesListItem, RightContainer, Button, InfoText } from './components';
import { CryptoPricesProps, CryptoCurrency, MarketsData, MarketsVars } from './types';
import Input from '../Shared/Input';
import { isEmptyOrSpaces as isEmptyOrWhitespaces } from '../../utils';

const GET_LAST_PRICES = gql`
query price($cryptoCurrencyCode: String!, $currency: String!) {
  markets(filter:{ baseSymbol: {_eq:$cryptoCurrencyCode} quoteSymbol: {_eq:$currency}}) {
    baseSymbol
    ticker {
      lastPrice
    }
  }
} 
`;

export const CryptoPrices = (props: CryptoPricesProps) => {
  const CURRENCY = "EUR";

  const [code, setCode] = React.useState<string>('');
  const [cryptoCurrencies, setCryptoCurrencies] = React.useState<CryptoCurrency[]>([]);
  const [lastRequested, setLastRequested] = React.useState<string>("");

  const [getMarkets, { data }] = useLazyQuery<MarketsData, MarketsVars>(GET_LAST_PRICES, {
    onCompleted: () => {
      addCryptoCurrencyFromData();
    }
  });

  function removeCryptoCurrency(code: string) {
    setCryptoCurrencies(cryptoCurrencies.filter(x => x.code !== code));
  }

  function addCryptoCurrency(): void {
    if (isEmptyOrWhitespaces(code)) {
      return;
    }

    if (cryptoCurrencies.find(x => x.code === code)) {
      console.log("Already exists!");
      setCode('');
      return;
    }

    if (code.toLocaleLowerCase() === lastRequested.toLocaleLowerCase()) {
      addCryptoCurrencyFromData();
      return;
    }

    setLastRequested(code);
    getMarkets({
      variables: {
        currency: CURRENCY,
        cryptoCurrencyCode: code
      }
    });
  };

  function addCryptoCurrencyFromData(): void {
    if (data && data.markets.length) {
      const market = data.markets[0];
      setCryptoCurrencies([...cryptoCurrencies, { code: market.baseSymbol, value: parseFloat(market.ticker.lastPrice) }]);
    } else {
      console.log("not added");
    }
    setCode('');
  }

  return (<ContainerWrapper>
    <MainContainer>
      <LeftContainer>
        <Paragraph color="white" size={35}>Now you can track all your cryptos here!</Paragraph>
        <PricesListContainer>
          <Paragraph color="white" size={20} opacity={0.3}>Just enter the cryptocurrency code on the form to the right</Paragraph>
          <PricesList>
            {
              !cryptoCurrencies.length
                ? <Paragraph color="white">No items yet :(</Paragraph>
                : cryptoCurrencies.map(item => <PricesListItem key={item.code}>
                  <Icon></Icon>
                  <Price>
                    <Paragraph color="white" size={20}>{item.code}</Paragraph>
                    <Paragraph color="white" size={12} opacity={0.3}>{item.value.toFixed(2)}€</Paragraph>
                  </Price>
                  <div>
                    <CloseButton onClick={() => removeCryptoCurrency(item.code)}></CloseButton>
                  </div>
                </PricesListItem>)
            }
          </PricesList>
        </PricesListContainer>
      </LeftContainer>

      <RightContainer>
        <Input type="text" value={code} label="Cryptocurrency code" onChange={(value) => setCode(value)}></Input>
        <Button onClick={addCryptoCurrency}>Add</Button>
        <InfoText>
          <Paragraph size={12} color="black" opacity={0.4}>Use of this service is subject to term and conditions.</Paragraph>
        </InfoText>
      </RightContainer>
    </MainContainer>
  </ContainerWrapper>)
}