import React from 'react'
import { registerComponent } from 'core';

registerComponent('HeadingBlock', () => {
  return {
    component: {
      fields: {
        title: {
          type: 'text'
        }
      },
      render() {
        return <h1>Hello, world</h1>;
      }
    }
  }
})
