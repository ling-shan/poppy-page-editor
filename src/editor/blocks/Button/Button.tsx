import React from 'react'
import { registerComponent } from '../../core/registerComponent';

import { Button, ButtonProps as CompButtonProps } from '../../components/Button';
import { Fields } from '@measured/puck';

const Name = 'Button';

export interface ButtonProps {
  label?: string
  type?: CompButtonProps["type"]
  href?: string
}

export const ButtonFileds:Fields<ButtonProps> = {
  label: {
    type: "text",
  },
  type: {
    type: "select",
    options: [
      {
        label: "default",
        value: "default",
      },
      {
        label: "primary",
        value: "primary",
      },
      {
        label: "dashed",
        value: "dashed",
      },
      {
        label: "link",
        value: "link",
      },
      {
        label: "text",
        value: "text",
      },
    ]
  },
  href: {
    type: 'text'
  }
}

registerComponent<ButtonProps>({
  name: Name,
  fields: {
    ...ButtonFileds,
  },
  defaultProps: {
    label: 'Button',
    type: 'default',
  },
  render(props) {
    return (
      <Button type={props.type} href={props.href}>{props.label}</Button>
    )
  }
});

export default {
  Name,
}

