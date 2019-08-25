import React, { useState } from 'react';
import GlobalStyle from '../../globalStyle';
import Header from '../header';
import EmailSubscribe from '../email-subscribe';

function App() {
  let [isTooltipActive, setTooltipVisibility] = useState(false);

  function toggleTooltip() {
    setTooltipVisibility(isTooltipActive = !isTooltipActive);
  }

  return (
    <div>
      <GlobalStyle />
      <Header onClickIcon={toggleTooltip}>
      </Header>
      <EmailSubscribe toggleTooltip={toggleTooltip} visible={isTooltipActive} />
    </div>
  );
}

export default App;
