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
  position: relative;
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
`;

const NotificationIcon = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  top: -10px;
  right: -10px;
  background-color: ${props => props.theme.brand.secondary};
  border: 2px solid #FFF;
  border-radius: 50%;
  font-weight: 700;
  font-size: 11px;
  color: #FFF;
`;

function HeaderComponent({ onClickIcon, notificationCount }) {

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <EnvelopeContainer onClick={onClickIcon}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ color:"#FFF" }} />
          <NotificationIcon>
            { notificationCount }
          </NotificationIcon>
        </EnvelopeContainer>
      </Header>
    </ThemeProvider>
  );
}

export default HeaderComponent;