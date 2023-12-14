import React from 'react'
import { registerComponent } from '../../core/registerComponent';
import { registerCategory } from '../../core/registerCategory';

import { Alert } from 'antd';


registerComponent({
  name: 'Alert',
  fields: {
    message: {
      type: "text",
    },
    type: {
      type: "select",
      options: [
        {
          label: "success",
          value: "success",
        },
        {
          label: "info",
          value: "info",
        },
        {
          label: "warning",
          value: "warning",
        },
        {
          label: "warning",
          value: "warning",
        },
      ]
    }
  },
  render(props) {
    return (
      <Alert message={props.message} type={props.type}/>
    )
  }
});

registerCategory({
  name: "typography",
  components: ["Alert"],
})
