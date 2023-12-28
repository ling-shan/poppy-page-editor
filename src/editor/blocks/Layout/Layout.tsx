import React from 'react'

import { registerComponent } from '../../core/registerComponent';
import { DropZone, Fields } from '@measured/puck';

import styles from './Layout.module.css'

const Name = 'Layout';

export const LayoutWrapOptions = [
  { label: "nowrap", value: "nowrap" },
  { label: "wrap", value: "wrap" },
] as const;

export const LayoutDirectOptions = [
  { label: "row", value: "row" },
  { label: "column", value: "column" },
] as const;

export const LayoutJustifyOptions = [
  { label: "start", value: "start" },
  { label: "center", value: "center" },
  { label: "space-between", value: "space-between" },
  { label: "space-around", value: "space-around" },
] as const;

export const LayoutAlignOptions = [
  { label: "start", value: "start" },
  { label: "center", value: "center" },
  { label: "end", value: "end" },
  { label: "stretch", value: "stretch" },
] as const;

export interface LayoutProps  {
  wrap?: typeof LayoutWrapOptions[number]['value'];
  direction?: typeof LayoutDirectOptions[number]['value'];
  justify?: typeof LayoutJustifyOptions[number]['value'];
  align?: typeof LayoutAlignOptions[number]['value'];
  gap?: React.CSSProperties['gap'];
  flex?: React.CSSProperties['flex'];
  items?: any[],
}

export const layoutFileds:Fields<LayoutProps> = {
  align: {
    type: 'select',
    options: [...LayoutAlignOptions]
  },
  wrap: {
    type: 'select',
    options: [...LayoutWrapOptions]
  },
  direction: {
    type: 'select',
    options: [...LayoutDirectOptions]
  },
  justify: {
    type: 'select',
    options: [...LayoutJustifyOptions]
  },
  flex: {
    type: 'text',
  },
  gap: {
    type: 'text',
  },
  items: {
    type: "array",
    arrayFields: {
    },
    getItemSummary: (item, idx) => `Item ${idx ?? 0}`,
  },
}

registerComponent<LayoutProps>({
  name: Name,
  fields: {
    ...layoutFileds,
  },
  defaultProps: {
    gap: '24px',
    wrap: 'wrap',
    direction: 'row',
    justify: 'center',
    align: 'center',
    items: [{} as any, {} as any]
  },
  render(props) {
    return (
      <div className={styles.main} style={{flexWrap:props.wrap, alignItems: props.align, justifyContent: props.justify, gap: props.gap, flexDirection: props.direction }}>
        {props.items?.map((item, idx) => {
          return (
            <DropZone key={idx} zone={"content-" + idx} />
          )
        })}

      </div>
    )
  }
});

export default {
  Name,
}

