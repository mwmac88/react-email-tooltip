import React, { useState } from 'react';
import GlobalStyle from '../../globalStyle';
import Header from '../header';
import EmailSubscribe from '../email-subscribe';

function App() {
  let [isTooltipActive, handleTooltipVisibility] = useState(false);

  function toggleTooltip () {
    handleTooltipVisibility(isTooltipActive = !isTooltipActive);
  }

  const renderEmailSubscribe = isTooltipActive ?  <EmailSubscribe /> : 'NOTHING TO SEE HERE';

  return (
    <div>
      <GlobalStyle />
      <Header onClickIcon={toggleTooltip}>
      </Header>
      { renderEmailSubscribe }
    </div>
  );
}

export default App;
