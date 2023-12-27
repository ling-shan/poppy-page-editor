import React from 'react'
import { registerComponent } from '../../core/registerComponent';

import styles from './Banner.module.css'

const Name = 'Banner';

export const ImageFitOptions = [
  { label: "contain", value: "contain" },
  { label: "cover", value: "cover" },
  { label: "fill", value: "fill" },
  { label: "none", value: "none" },
  { label: "scale-down", value: "scale-down" },
] as const;

interface BannerProps {
  height?: string
  src?: string
  fit?: typeof ImageFitOptions[number]['value']
}

registerComponent<BannerProps>({
  name: Name,
  fields: {
    height: {
      type: "text"
    },
    src: {
      type: "text"
    },
    fit: {
      type: "select",
      options: [...ImageFitOptions],
    },
  },
  defaultProps: {
    src: 'https://images.unsplash.com/photo-1687204209659-3bded6aecd79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    fit: 'cover',
    height: '200px'
  },
  render(props) {
    return (
      <img style={{height: props.height, objectFit: props.fit}} className={styles.main} src={props.src} />
    )
  }
});

export default {
  Name,
}

