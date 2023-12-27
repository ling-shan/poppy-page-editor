import React from 'react'
import { registerComponent } from '../../core/registerComponent';

import styles from './Logos.module.css'

const Name = 'Logos'

interface LogoItem {
  logo?: {
    url?: string
  }
}

interface LogosProps {
  items?: LogoItem[]
}


registerComponent<LogosProps>({
  name: Name,
  fields: {
    items: {
      type: 'array',
      arrayFields: {
        logo: {
          type: "object",
          objectFields: {
            url: {
              type: "text"
            }
          }
        }
      }
    }
  },
  defaultProps: {
    items: Array(8).fill({
      logo: {
        url: "https://images.unsplash.com/photo-1687204209659-3bded6aecd79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
      }
    })
  },
  render(props) {
    const { items } = props;
    return (
      <div className={styles.main}>
        {items?.map((item, idx) => {
          return (
            <img key={idx} className={styles.logoImg} src={item.logo?.url}/>
          )
        })}
      </div>
    )
  }
})


export default {
  Name,
}
