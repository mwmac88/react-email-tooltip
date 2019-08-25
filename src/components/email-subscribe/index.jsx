import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmailInput from './email-subscribe-input';
import EmailMarketingConsent from './email-subscribe-consent';
import EmailButton from './email-subscribe-btn';
import { devices } from '../../themeStyle';

const StyledEmailSubscribe = styled.div`
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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const EmailSubscribeTitle = styled.h4`
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

const EmailSubscribeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 95px;
  background: linear-gradient(360deg, #5BBDE4 0%, #1C92E4 100%) no-repeat;
`;

const EmailSubscribeMiddle = styled.div`
  height: 22px;
  background: linear-gradient(180deg, #1E507D 0%, #62CDD4 100%) no-repeat;
`;

const EmailSubscribeFooter = styled.div`
  padding: 30px 15px;
  background: linear-gradient(180deg, #EDDDCE 0%, #F4ECE2 100%) no-repeat;

  @media ${devices.tablet} {
    padding: 30px 45px;
  }
`;

function EmailSubscribe({toggleTooltip, visible}) {
  let renderFooterComponents;
  let emailSubscribeTitle;
  // get email from session storage
  const sessionEmail = localStorage.getItem('email');
  // local state of form values
  const [formValues, setFormValues] = useState(
    sessionEmail ? sessionEmail : { email: '' }
  );
  const [emailSubscribeComplete, setEmailSubscribeComplete] = useState(false);

  // useEffect hook to update local state with completed status
  // used for componentMount and componentUpdate state
  useEffect(() => {
    if (sessionEmail) {
      setEmailSubscribeComplete(true);
    }
  }, [sessionEmail]);

  // Switch title of heading based on completed form state
  emailSubscribeTitle = emailSubscribeComplete ?
    'Congratulations! You have joined the smart people who save money on holidays.' :
    'Join the smart people who save money on holidays.';

  // Update local state with form input values
  function handleEmailChange(e) {
    setFormValues({email: e.target.value});
  }

  // Update localStorage on form submit and set to complete
  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('email', formValues.email);
    setEmailSubscribeComplete(true);
  }

  // Dynamically render components based on email submitted state
  if (emailSubscribeComplete) {
    renderFooterComponents = <EmailButton btnText="Close" handleClick={toggleTooltip} />
  } else {
    renderFooterComponents =
      <StyledForm onSubmit={handleSubmit}>
        <EmailInput emailFormValue={formValues.email} onEmailChange={handleEmailChange} />
        <EmailMarketingConsent />
        <EmailButton btnText="I'm In!" />
      </StyledForm>
  }

  return (
    <StyledEmailSubscribe visible={visible}>
      <EmailSubscribeHeader>
        <EmailSubscribeTitle>
          { emailSubscribeTitle }
        </EmailSubscribeTitle>
      </EmailSubscribeHeader>
      <EmailSubscribeMiddle />
      <EmailSubscribeFooter>
        { renderFooterComponents }
      </EmailSubscribeFooter>
    </StyledEmailSubscribe>
  );
}

export default EmailSubscribe;