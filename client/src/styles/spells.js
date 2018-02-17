import { css } from 'react-emotion'

const styles = {
  name: css`
    flex-basis: 26%;

    @media screen and (max-width: 960px) {
      flex-basis: 88%;
    }
  `,
  level: css`
    flex-basis: 10%;

    @media screen and (max-width: 960px) {
      flex-basis: 12%;
    }
  `,
  school: css`
    flex-basis: 17%;
  `,
  classes: css`
    flex-basis: 45%;
  `,
  options: css`
    flex-basis: 1%;
    min-width: 15px;
    text-align: right;
  `,
  hideOnMobile: css`
    @media screen and (max-width: 960px) {
      display: none;
    }
  `
}

export default styles
