import React from 'react';
// import styled from 'styled-components';

function EmailInput() {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);

  const onChange = event => setValue(event.target.value);

  return (
    <div>
       <input value={value} type="text" onChange={onChange} />
    </div>
  );
}

export default EmailInput;