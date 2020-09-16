import styled from "styled-components";
import iconImg from '../../images/icon.svg'

export const ContainerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: inherit;
  padding: 0 8%;
`;

export const PricesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 80%;
  margin-top: 20px;
`;

export const PricesList = styled.div`
  margin-top: 20px;
  overflow: auto;
`;

export const PricesListItem = styled.div`
  display: flex;
  height: 40px;
  padding: 15px 0;
  align-items: center;
  border-bottom: 1px solid;
  border-image-source: linear-gradient(162deg, white, transparent);
  border-image-slice: 1;
`;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  background: url(${iconImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Price = styled.div`
  margin-left: 20px;
  width: 65%;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column; 
  height: 100%;
`;

export const RightContainer = styled.div`
  width: 250px;
  background-color: white;
  padding: 30px 40px;
  align-self: flex-start;
  box-shadow: 0px 0px 25px 0px darkslategrey;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 100%;
  border-radius: 20px;
  background: red;
  border: none;
  margin: 10px 0;
  color: white;
  padding: 10px 0px;
  outline: none;
  cursor: pointer;

  &:active {
    filter: brightness(90%);
  }
`;

export const InfoText = styled.div`
  margin: 20px 2px 0px 2px;
  text-align: center;
`;