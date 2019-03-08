import styled from 'styled-components';

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

// grid-template-rows: 235px calc(100vh - 285px) 50px;

export const Wrap = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr;
  /* grid-template-rows: 235px calc(100vh - 235px); */
  grid-template-rows: 235px calc(100vh - 285px) 50px;

  & > header {
    width: 100vw;
  }
  & > main {
    width: 100vw;
    position: relative;
  }
`;
