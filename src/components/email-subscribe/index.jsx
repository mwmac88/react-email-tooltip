import React, { useState, useEffect } from 'react';
import EmailInput from './email-subscribe-input';
import EmailMarketingConsent from './email-subscribe-consent';
import EmailButton from './email-subscribe-btn';
import {
  EmailSubscribeFooter,
  EmailSubscribeHeader,
  EmailSubscribeMiddle,
  EmailSubscribeTitle,
  StyledEmailSubscribe,
  StyledForm,
} from './styled';

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