import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { theme } from '../../themeStyle';

const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: ${props => props.theme.brand.main};
`;

const EnvelopeContainer = styled.div`
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
`;

function HeaderComponent({ onClickIcon }) {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <EnvelopeContainer onClick={onClickIcon}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color:"#FFF" }} />
        </EnvelopeContainer>
      </Header>
    </ThemeProvider>
  );
}

export default HeaderComponent;