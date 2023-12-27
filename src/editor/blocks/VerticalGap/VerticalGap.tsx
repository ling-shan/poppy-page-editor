import React from 'react'
import { registerComponent } from '../../core/registerComponent';

import styles from './VerticalGap.module.css'
import classNames from 'classnames';

const Name = 'VerticalGap';

export const GapOptions = [
  { label: "XXXL", value: "xxxl" },
  { label: "XXL", value: "xxl" },
  { label: "XL", value: "xl" },
  { label: "L", value: "l" },
  { label: "M", value: "m" },
  { label: "S", value: "s" },
  { label: "XS", value: "xs",  },
] as const;

export interface VerticalGapProps {
  gap?: typeof GapOptions[number]['value']
}

export const GapSizeStyles = {
  xxxl: styles.gapSize_xxxxl,
  xxl: styles.gapSize_xxxl,
  xl: styles.gapSize_xl,
  l: styles.gapSize_l,
  m: styles.gapSize_m,
  s: styles.gapSize_s,
  xs: styles.gapSize_xs,
}

registerComponent<VerticalGapProps>({
  name: Name,
  fields: {
    gap: {
      type: "select",
      options: [...GapOptions]
    },
  },
  defaultProps: {
    gap: 'm',
  },
  render({ gap }) {
    return (
      <div className={classNames(styles.main, GapSizeStyles[gap ?? 'm'])} style={{height: gap}}></div>
    )
  }
});

export default {
  Name,
}
