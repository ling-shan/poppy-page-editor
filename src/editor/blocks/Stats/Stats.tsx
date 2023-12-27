import React from 'react'
import { registerComponent } from '../../core/registerComponent';
import ColorField from '../../fields/ColorField';
import Section from '../../components/Section';

import styles from './Stats.module.css'

const Name = 'Stats'

interface StatsItem {
  title?: string;
  value?: string;
}

interface StatsProps {
  items?: StatsItem[]
  fromBackgroundColor?: string
  toBackgroundColor?: string
}

registerComponent<StatsProps>({
  name: Name,
  fields: {
    fromBackgroundColor: {
      type: 'custom',
      render: ColorField,
    },
    toBackgroundColor: {
      type: 'custom',
      render: ColorField,
    },
    items: {
      type: "array",
      getItemSummary: (item: any, idx) => (item.label || "StatsItem") + idx,
      arrayFields: {
        title: {
          type: "text",
        },
        value: {
          type: "text",
        }
      },
    }
  },

  defaultProps: {
    fromBackgroundColor: '#014292',
    toBackgroundColor: '#3479be',
    items: [{
      title: 'Const savings',
      value: '$1.5M'
    }, {
      title: 'User Count',
      value: '20M+'
    }
    ]
  },

  render(props) {
    const { items, fromBackgroundColor = 'var(--puck-color-azure-2)', toBackgroundColor = 'var(--puck-color-azure-4)'} = props;

    return (
      <div className={styles.main}>
        <div className={styles.items} style={{backgroundImage: `linear-gradient(120deg, ${fromBackgroundColor} 0%, ${toBackgroundColor} 100%)`}}>
          {items?.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.value}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
})


export default {
  Name,
}
