import React from 'react';
import { registerComponent } from '../../core/registerComponent';
import { ButtonProps } from '../Button';
import ColorField from '../../fields/ColorField';

import styles from './SiteMap.module.css'

const Name = 'SiteMap'

interface SiteMapColumn {
  title?: string
  items?: ButtonProps[]
}

interface SiteMapProps {
  color?: string
  backgroundColor?: string
  columns?: SiteMapColumn[]
}

registerComponent<SiteMapProps>({
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
    columns: {
      type: "array",
      getItemSummary: (item: any, idx?: number) => item.label || "Column -" + idx,
      arrayFields: {
        title: {
          type: "text",
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
    }
  },

  defaultProps: {
    color: '#000',
    backgroundColor: '#00000000',
    columns: Array(4).fill({
      title: "Section",
      items: Array(4).fill({
        label: 'Label'
      },)
    })
  },

  render(props) {
    const { columns, backgroundColor, color } = props;
    return (
      <div className={styles.main} style={{backgroundColor,}}>
        <div className={styles.columns}>
          {columns?.map((column, columnIdx) => {
            return (
              <div className={styles.column} key={columnIdx}>
                <p style={{color}}>{column.title}</p>
                <div className={styles.links}>
                  {column.items?.map((btnProps, itemIdx) => {
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
          })
          }
        </div>
      </div>
    )
  }
})

export default {
  Name
}
