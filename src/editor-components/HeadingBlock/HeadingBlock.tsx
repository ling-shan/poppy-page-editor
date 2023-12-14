import React from 'react'
import { registerComponent } from '../../core/registerComponent';
import { registerCategory } from '../../core/registerCategory';

registerComponent({
  name: 'HeadingBlock',
  render() {
    return (
      <h1>Hello, world</h1>
    )
  }
});

registerCategory({
  name: "typography",
  components: ["HeadingBlock"],
})
