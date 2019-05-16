import styled, {css} from 'styled-components';

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

interface WrapProps {
  error: boolean;
}

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  & > fieldset {
    border: none;
  }

  label {
    display: block;
    text-transform: uppercase;
    font-size: 14px;
  }

  span {
    display: block;
    color: red;
    font-size: 10px;
    height: 12px;
    margin: 2px 0;
  }

  input {
    padding: 8px 12px;
    margin: 2px 0;
    color: black;
    outline: none;
    ${(props: WrapProps) =>
      props.error &&
      css`
        border: 1px solid red;
      `}
  }
`;
