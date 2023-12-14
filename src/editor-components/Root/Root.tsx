import React from 'react'
import { registerComponent } from '../../core/registerComponent';

registerComponent({
  name: 'root',
  render(props) {
    return (
      <div>{props.children}</div>
    )
  }
});
