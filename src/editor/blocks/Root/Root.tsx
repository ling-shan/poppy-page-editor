import React, { ReactNode } from 'react'
import { registerComponent } from '../../core/registerComponent';

import styles from './Root.module.css'

interface RootProps {
  title?: string
  children?: ReactNode
}

registerComponent<RootProps>({
  name: 'root',
  render(props) {
    return (
      <div className={styles.main}>
        <div className={styles.inner}>
          {props.children}
        </div>
      </div>
    )
  }
});
