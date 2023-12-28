import React from 'react'
import { ButtonProps } from '../Button';
import { registerComponent } from '../../core/registerComponent';
import ColorField from '../../fields/ColorField';

import styles from './Footer.module.css'

const Name = 'Footer'

interface FooterProps {
  color?: string
  backgroundColor?: string
  copyright?: string
  items?: ButtonProps[]
}

registerComponent<FooterProps>({
  name: Name,

  fields: {
    color: {
      type: "custom",
      render: ColorField,
    },
    backgroundColor: {
      type: "custom",
      render: ColorField,
    },
    copyright: {
      type: 'text',
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
    color: '#767676',
    backgroundColor: '#D0D8DB',
    copyright: '© 20xx-20xx xxxxxxxx',
    items: Array(4).fill({
      label: 'Label'
    },)
  },

  render(props) {
    const { items, backgroundColor, color } = props;
    return (
      <div className={styles.main} style={{backgroundColor,}}>
        <p style={{color}}>{props.copyright}</p>
        <div className={styles.links} style={{color}}>
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



