import React from 'react'

import { registerComponent } from '../../core/registerComponent';
import { Fields } from '@measured/puck';

import styles from './RichText.module.css'

const Name = 'RichText';

export interface RichTextProps  {
  template?: string
}

export const RichTextFileds:Fields<RichTextProps> = {
  template: {
    type: 'textarea',
  },
}

registerComponent<RichTextProps>({
  name: Name,
  fields: {
    ...RichTextFileds,
  },
  render(props) {
    return (
      <div role='textarea' className={styles.main} dangerouslySetInnerHTML={{__html: props.template ?? ''}}/>
    )
  }
});

export default {
  Name,
}
