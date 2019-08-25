import React from 'react';
import styled from 'styled-components';
import { devices } from '../../themeStyle';

const StyledEmailButton = styled.button`
  order: 3;
  font-family: Arial;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  margin: 15px 0 0;
  padding: 0;
  overflow: visible;
  text-transform: none;
  color: #FFF;
  background-color: #FFA004;
  border: 0;
  border-radius: 0;
  width: 100%;
  height: 40px;

  @media ${devices.tablet} {
    order: 2;
    width: 200px;
    margin: 0;
  }
`;

function EmailSubscribeButton({btnText, handleClick}) {
  return (
    <StyledEmailButton onClick={handleClick}>
      {btnText}
    </StyledEmailButton>
  );
}

export default EmailSubscribeButton;