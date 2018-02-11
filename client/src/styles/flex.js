import { css } from 'react-emotion'

const styles = {
  flexContainer: css`
    display: flex;
    flex-wrap: wrap;
  `,
  flexItem: css`
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    list-style: none;
    white-space: nowrap;

    p {
      margin: 0;
      width: 90%;
      overflow-x: hidden;
      text-overflow: ellipsis;
    }
  `
}

export default styles
