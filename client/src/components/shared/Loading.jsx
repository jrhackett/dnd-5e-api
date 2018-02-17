import React from 'react'
import { css } from 'react-emotion'
import { Icon } from 'react-fa'

const loading = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  span {
    font-size: 50px;
    width: 50px;
    height: 50px;
  }
`

const Loading = () => (
  <div className={ loading }>
    <Icon name="spinner" spin />
  </div>
)

export default Loading
