import React from 'react';
import { registerComponent } from '../../core/registerComponent';
import { ButtonProps } from '../Button';

import ColorField from '../../fields/ColorField';

import styles from './Header.module.css'

const Name = 'Header'

interface HeaderProps {
  logo?:  {
    title?: string,
    url?: string,
  }
  color?: string
  backgroundColor?: string
  items?: ButtonProps[]
}


registerComponent<HeaderProps>({
  name: Name,
  fields: {
    logo: {
      type: "object",
      objectFields: {
        title: {
          type: "text"
        },
        url: {
          type: "text"
        },
      }
    },
    color: {
      type: "custom",
      render: ColorField,
    },
    backgroundColor: {
      type: "custom",
      render: ColorField,
    },
    items: {
      type: "array",
      getItemSummary: (item: any, idx?: number) => item.label || "Item -" + idx,
      arrayFields: {
        label: {
          type: "text",
        },
        href: {
          type: 'text'
        }
      }
    }
  },
  defaultProps: {
    color: '#000',
    logo: {
      title: "Title",
      url: "https://images.unsplash.com/photo-1687204209659-3bded6aecd79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
    },
    items: Array(4).fill({
      label: 'Label'
    },)
  },
  render(props) {
    const { items, backgroundColor, color } = props;
    return (
      <div className={styles.main} style={{backgroundColor,}}>
        <div className={styles.logo}>
          {props.logo?.url && (
            <img src={props.logo.url}/>
          )}
          <span style={{color,}}>{props.logo?.title}</span>
        </div>
        <div className={styles.links}>
            {items?.map((btnProps, itemIdx) => {
              return (
                <a
                  key={itemIdx}
                  style={{color}}
                  href={btnProps.href}
                >
                  {btnProps.label}
                </a>
              )
            })}
        </div>
      </div>
    )
  }
})



export default {
  Name
}
