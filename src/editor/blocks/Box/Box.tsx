import React from 'react'
import { registerComponent } from '../../core/registerComponent';

import styles from './Box.module.css'
import { DropZone } from '@measured/puck';

const Name = 'Box'

interface BoxProps {
  border?: string
  margin?: string
  padding?: string
  background?: string
}

registerComponent<BoxProps>({
  name: Name,
  fields: {
    border: {
      type: 'text'
    },
    margin: {
      type: 'text'
    },
    padding: {
      type: 'text'
    },
    background: {
      type: 'text'
    }
  },
  render(props) {
    return (
      <div className={styles.main} style={{border: props.border, background: props.background, padding: props.padding, margin: props.margin}}>
        <DropZone zone="content" />
      </div>
    )
  }
})

export default {
  Name,
}
