import styled from 'styled-components';

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

export const Wrap = styled.div`
  display: grid;
  grid-auto-rows: 560px;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-auto-flow: row;
`;
