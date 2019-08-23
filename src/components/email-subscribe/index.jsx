import React from 'react';
import styled from 'styled-components';
import EmailInput from './email-input';

const StyledEmailSubscribe = styled.div`
  width: 100%;
  height: 350px;
`;

const EmailSubscribeTitle = styled.h4`
  max-width: 300px;
  font-size: 22px;
  font-weight: 400;
  color: #FFF;
  text-align: center;
`;

const EmailSubscribeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 95px;
  background: linear-gradient(0deg,#5bbde4,#1c92e4 60%) no-repeat;
`;

const EmailSubscribeMiddle = styled.div`
  height: 22px;
  background: linear-gradient(0deg,#62cdd4,#1e507d 100%) no-repeat;
`;

const EmailSubscribeFooter = styled.div`
  min-height: 200px;
  background: linear-gradient(0deg,#f4ece2,#edddce 90%) no-repeat;
`;

function EmailSubscribe() {
  return (
    <StyledEmailSubscribe>
      <EmailSubscribeHeader>
        <EmailSubscribeTitle>Join the smart people who save money on holidays</EmailSubscribeTitle>
      </EmailSubscribeHeader>
      <EmailSubscribeMiddle />
      <EmailSubscribeFooter>
        <EmailInput />
      </EmailSubscribeFooter>
    </StyledEmailSubscribe>
  );
}

export default EmailSubscribe;