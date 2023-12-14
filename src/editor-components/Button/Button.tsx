import React from 'react'
import { registerComponent } from '../../core/registerComponent';
import { registerCategory } from '../../core/registerCategory';

import { Button } from 'antd';

registerComponent({
  name: 'Button',
  fields: {
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
    }
  },
  render(props) {
    return (
      <Button type={props.type}>{props.label}</Button>
    )
  }
});

registerCategory({
  name: "typography",
  components: ["Button"],
})
