import { css } from 'react-emotion'

const styles = {
  name: css` flex-basis: 26%; `,
  level: css` flex-basis: 10%; `,
  school: css` flex-basis: 17%; `,
  classes: css` flex-basis: 45%; `,
  options: css`
    flex-basis: 1%;
    min-width: 15px;
    text-align: right;
  `
}

export default styles
