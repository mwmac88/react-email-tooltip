import styled from 'styled-components';
import { devices } from '../../themeStyle';

export const StyledEmailSubscribe = styled.div`
  position: relative;
  display: ${props => props.visible ? 'block' : 'none'};
  width: 100%;
  height: 350px;

  :after {
    content: '';
    display: block;
    position: absolute;
    right: 20px;
    top: -10px;
    width: 20px;
    height: 20px;
    background-color: #1C92E4;
    transform: rotate(-45deg);

    @media ${devices.tablet} {
      right: 5px;
      top: -10px;
    }
  }

  @media ${devices.tablet} {
    width: 549px;
    margin: 0 13px 0 auto;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const EmailSubscribeTitle = styled.h4`
  max-width: 300px;
  font-family: ArialMT;
  font-size: 22px;
  font-weight: 400;
  color: #FFF;
  text-align: center;

  @media ${devices.tablet} {
    max-width: none;
    padding: 0 22px;
  }
`;

export const EmailSubscribeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 95px;
  background: linear-gradient(360deg, #5BBDE4 0%, #1C92E4 100%) no-repeat;
`;

export const EmailSubscribeMiddle = styled.div`
  height: 22px;
  background: linear-gradient(180deg, #1E507D 0%, #62CDD4 100%) no-repeat;
`;

export const EmailSubscribeFooter = styled.div`
  padding: 30px 15px;
  background: linear-gradient(180deg, #EDDDCE 0%, #F4ECE2 100%) no-repeat;

  @media ${devices.tablet} {
    padding: 30px 45px;
  }
`;
