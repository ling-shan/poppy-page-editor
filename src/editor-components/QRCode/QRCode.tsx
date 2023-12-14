import React from 'react'
import { registerComponent } from '../../core/registerComponent';
import { registerCategory } from '../../core/registerCategory';

import { QRCode } from 'antd';

registerComponent({
  name: 'QRCode',
  fields: {
    value: {
      type: "text"
    }
  },
  render(props) {
    return (
      <QRCode value={props.value}/>
    )
  }
});

registerCategory({
  name: "typography",
  components: ["QRCode"],
})
