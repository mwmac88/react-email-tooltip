import React from 'react';
import styled from 'styled-components';
import { devices } from '../../themeStyle';

const StyledInput = styled.input`
  order: 1;
  width: calc(100% - 10px);
  height: 40px;
  font-family: arial;
  font-size: 13px;
  line-height: 15px;
  border: 1px solid #CCC;
  border-radius: 3px;
  padding: 0 0 0 10px;

  @media ${devices.tablet} {
    flex: 0 1 50%;
  }

  ::placeholder {
    color: #333;
    font-style: italic;
  }

  ::invalid {
    border: 1px solid red;
  }

  ::valid {
    border: 1px solid green;
  }
`;

function EmailInput({emailFormValue, onEmailChange}) {
  return (
    <StyledInput type="email" onChange={onEmailChange} value={emailFormValue} placeholder="Enter email" required />
  );
}

export default EmailInput;