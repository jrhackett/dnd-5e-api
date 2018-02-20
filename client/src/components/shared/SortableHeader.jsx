import React from 'react'
import { css, cx } from 'react-emotion'
import styles from '../../styles/spells'
import flex from '../../styles/flex'

const header = css`
  text-transform: uppercase;
  padding: 0 3rem;

  p {
    font-size: 10px;
    cursor: pointer;
  }
`

const active = (sortOrder) => css`
  p:before {
    content: '';
    position: relative;
    top: ${ sortOrder === 'asc' ? '8px' : '-8px' };
    ${ sortOrder === 'asc' ? 'border-top: 4px solid #000;' : 'border-bottom: 4px solid #000;' }
    left: 0px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    clear: both;
    margin-right: 0.5rem;
  }
`

const SortableHeader = ({ headers, sortOrder, sortKey, onClick }) => (
  <div className={ cx(flex.flexContainer, header) }>
    {headers.map(h => (
      <div key={ `header-${ h }` } className={ cx(flex.flexItem, styles[h], { [active(sortOrder)]: sortKey === h }) } onClick={ () => onClick(h, sortOrder, sortKey === h) }>
        <p>{ h }</p>
      </div>
    ))}
  </div>
)

export default SortableHeader
