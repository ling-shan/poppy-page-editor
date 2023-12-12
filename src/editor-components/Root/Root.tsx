import React from 'react'
import { registerComponent } from 'core';

registerComponent('root', () => {
  return {
    component: {
      fields: {
      },
      render({children}) {
        return <div>{children}</div>;
      }
    }
  }
})
