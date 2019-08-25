import React from 'react';
import styled from 'styled-components';
import { devices } from '../../themeStyle';

const EmailMarketing = styled.div`
  order: 2;
  margin-top: 6px;

  @media ${devices.tablet} {
    order: 3;
  }
`;

const EmailMarketingLabel = styled.label`
  font-family: ArialMT;
  font-size: 10px;
  line-height: 15px;
  color: #999;
  margin-top: 6px;
`;

function EmailMarketingConsent() {
  return (
    <EmailMarketing>
      <EmailMarketingLabel htmlFor="marketing-confirm">
        Icelolly Marketing Limited, wish to send you marketing emails. If you consent, please tick to confirm:
      </EmailMarketingLabel>
      <input type="checkbox" id="marketing-confirm" />
    </EmailMarketing>
  );
}

export default EmailMarketingConsent;
