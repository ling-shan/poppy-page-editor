import React from 'react'
import { registerComponent } from '../../core/registerComponent';
import { registerCategory } from '../../core/registerCategory';

import { Divider } from 'antd';


registerComponent({
  name: 'Divider',
  fields: {
    title: {
      type: "text",
    },

  },
  render(props) {
    return (
      <Divider>{props.title}</Divider>
    )
  }
});

registerCategory({
  name: "typography",
  components: ["Divider"],
})
