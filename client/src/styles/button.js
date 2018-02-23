import { css } from 'react-emotion'
import colors from './colors'

const styles = {
  btn: css`
    border-radius: 2px;
    display: inline-block;
    padding: 1rem 1.5rem;
    margin-bottom: 0;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;

    &:hover {
      text-decoration: none;
      border: 1px solid ${ colors.lightPurple };
      color: ${ colors.darkGray };
    }
  `,
  default: css`
    background-color: ${ colors.white };
    color: ${ colors.darkGray };
    border: 1px solid ${ colors.mediumGray };
  `,
  active: css`
    border: 1px solid ${ colors.lightPurple };
    color: ${ colors.lightPurple }
  `
}

export default styles
