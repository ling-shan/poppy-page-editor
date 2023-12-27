import React from 'react'
import classNames from 'classnames';

import { registerComponent } from '../../core/registerComponent';
import { DefaultTextProps, TextFields, TextProps, TextSizeStyles } from '../Text';

import styles from './Heading.module.css'

const Name = 'Heading';

const HeadingLevelOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
] as const;

export interface HeadingProps extends TextProps {
  headLevel?: typeof HeadingLevelOptions[number]['value']
}

registerComponent<HeadingProps>({
  name: Name,
  fields: {
    ...TextFields,
    headLevel: {
      type: "select",
      options: [...HeadingLevelOptions],
    },
  },
  defaultProps: {
    ...DefaultTextProps,
    headLevel: 2,
    text: "Heading",
  },
  render(props) {
    const Tag: any = props.headLevel ? `h${props.headLevel}` : "span";
    return (
      <Tag className={classNames(styles.main, TextSizeStyles[props.size ?? 'm'])} style={{textAlign: props.align , color: props.color}}>
        {props.text}
      </Tag>
    )
  }
});

export default {
  Name,
}
