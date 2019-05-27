import styled, {css} from 'styled-components';

import colors from '../../../constants/colors';
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

interface WrapProps {
  isOpen: boolean;
}

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & > header {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    border: 1px solid #cad1d8;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: none;
    background-color: ${colors.lightGray};

    padding: 8px 16px;
    height: 48px;
    position: relative;
  }

  & > header > h2 {
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  & > header > span {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-left: 1px solid ${colors.mediumGray};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > header > span > img {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  & > img {
    width: 300px;
    height: 400px;
    object-fit: cover;
    border: 1px solid ${colors.mediumGray};
  }

  & > section {
    border: 1px solid ${colors.mediumGray};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: none;
    padding: 8px 16px;
    position: relative;
    z-index: 5;
    transition: height 200ms linear, top 200ms linear;
    background-color: ${colors.transparentWhite};
    ${(props: WrapProps) =>
      props.isOpen
        ? css`
            height: 288px;
            top: -152px;
          `
        : css`
            height: 136px;
            top: 0;
          `}
  }

  & > section > button {
    position: absolute;
    top: -24px;
    left: 12px;
    width: 108px;
    height: 32px;

    padding: 0;
    border: none;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-transform: uppercase;
    border-radius: 4px;
    cursor: pointer;
    z-index: 10;

    &:focus,
    &:active {
      outline: none;
    }

    &::before {
      content: '';
      width: 8px;
      height: 8px;
      position: relative;
      margin: 0 12px;
      transform-origin: center;
      transition: transform 200ms linear, top 100ms linear;
    }

    ${(props: WrapProps) =>
      props.isOpen
        ? css`
            color: ${colors.accentBlue};
            background-color: ${colors.white};
            &::before {
              transform: rotate(-135deg);
              border-bottom: 2px solid ${colors.accentBlue};
              border-right: 2px solid ${colors.accentBlue};
              top: 2px;
            }
          `
        : css`
            color: ${colors.white};
            background-color: ${colors.accentBlue};
            &::before {
              top: -2px;
              border-bottom: 2px solid ${colors.white};
              border-right: 2px solid ${colors.white};
              transform: rotate(45deg);
            }
          `}
  }

  & > section > h2 {
    background-color: ${colors.mediumGray};
    color: ${colors.darkGray};

    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.3px;

    position: absolute;
    top: -16px;
    right: 0;
    left: 0;
    overflow: hidden;
    transition: height 200ms ease;

    ${(props: WrapProps) =>
      props.isOpen
        ? css`
            height: 60px;
            padding: 16px;
          `
        : css`
            height: 0;
            padding: 0;
          `}
  }

  & > section > .authors,
  & > section > .tags,
  & > section > p {
    margin: 12px 0 0 0;
  }

  & > section > .tags > span {
    display: inline-flex;
    font-size: 16px;
    color: ${colors.darkGray};
    letter-spacing: 0.3px;
    line-height: 1.2;
  }

  & > section > .authors {
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
  }

  & > section > .authors > span {
    font-size: 14px;
    color: ${colors.darkGray};
    letter-spacing: 0.17px;
    line-height: 1.2;
    font-weight: 600;
  }

  & > section > .hidden_content {
    margin: 24px 0 0 0;
  }

  & > section > .hidden_content > ul {
    list-style: none;
  }

  & > section > .hidden_content > ul > li {
    margin: 12px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    color: ${colors.accentBlue};

    font-family: ProximaNova-Bold;
    line-height: 1.2;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.2px;

    &::before {
      content: '';
      width: 16px;
      height: 16px;
      margin: 0 8px 0 0;
      background-image: url(../../../assets/images/png/zanichelli-external-link@8x.png);
      background-size: cover;
    }
  }
`;
