import React from 'react'
import { registerComponent } from '../../core/registerComponent';
import { Fields } from '@measured/puck';

import classNames from 'classnames';
import ColorField from '../../fields/ColorField';

import styles from './Text.module.css'

const Name = 'Text';

export const TextSizeOptions = [
  { label: "XXXL", value: "xxxl" },
  { label: "XXL", value: "xxl" },
  { label: "XL", value: "xl" },
  { label: "L", value: "l" },
  { label: "M", value: "m" },
  { label: "S", value: "s" },
  { label: "XS", value: "xs",  },
  { label: "Unset", value: "unset",  },
] as const;

export const TextSizeStyles = {
  xxxl: styles.textSize_xxxxl,
  xxl: styles.textSize_xxxl,
  xl: styles.textSize_xl,
  l: styles.textSize_l,
  m: styles.textSize_m,
  s: styles.textSize_s,
  xs: styles.textSize_xs,
  unset: undefined,
}

export const TextAlignOptions = [
  { label: "Left", value: "left" },
  { label: "Center", value: "center" },
  { label: "Right", value: "right" },
]  as const;

export const TextFields:Fields<TextProps> = {
  align: {
    type: "radio",
    options: [...TextAlignOptions,]
  },
  text: { type: "text" },
  size: {
    type: "select",
    options: [...TextSizeOptions],
  },
  color: { type: "custom", render: ColorField,},
};

export const DefaultTextProps = {
  text: 'Text',
  color: '#000000',
  align: 'left',
  size: 'm',
} as any

export interface TextProps {
  text: string;
  align?: typeof TextAlignOptions[number]['value']
  size?: typeof TextSizeOptions[number]['value']
  color?: string
}

registerComponent<TextProps>({
  name: Name,
  fields: {
    ...TextFields
  },
  defaultProps: {
    ...DefaultTextProps,
  },
  render(props) {
    return (
      <span className={classNames(styles.main, TextSizeStyles[props.size ?? 'm'])} style={{textAlign: props.align, color: props.color}}>{props.text}</span>
    )
  }
});

export default {
  Name,
}

