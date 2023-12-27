import React from 'react'
import { registerComponent } from '../../core/registerComponent';
import Button from '../../components/Button';
import { ButtonFileds, ButtonProps } from '../Button';
import { Section } from '../../components/Section/Section';
import classNames from 'classnames';

import styles from './Feature.module.css'

const Name = 'Feature';

export const FeatureAlignOptions = [
  { label: "Left", value: "left" },
  { label: "Right", value: "right" },
]  as const;

interface FeatureProps {
  title: string;
  description: string;
  padding: string;
  image?: {
    url?: string;
  };
  buttons?: ButtonProps[]
  align?: typeof FeatureAlignOptions[number]['value']
}

registerComponent<FeatureProps>({
  name: Name,

  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    align: {
      type: "radio",
      options: [...FeatureAlignOptions]
    },
    image: {
      type: "object",
      objectFields: {
        url: { type: "text" },
        // mode: {
        //   type: "radio",
        //   options: [
        //     { label: "inline", value: "inline" },
        //     { label: "background", value: "background" },
        //   ],
        // },
      },
    },
    padding: { type: "text" },
    buttons: {
      type: "array",
      getItemSummary: (item: any) => item.label || "Button",
      arrayFields: {
        ...ButtonFileds,
      },
    },
  },
  defaultProps: {
    title: 'Henry Ford',
    description: 'Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.',
    align: 'left',
    image: {
      url: 'https://images.unsplash.com/photo-1687204209659-3bded6aecd79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    },
    padding: "36px",
  },

  render(props) {
    const { padding, align, title, description, buttons, image } = props;
    return (
      <Section
        padding={padding}>
        <div className={classNames(styles.container, align === 'right' && styles.withAlignRight)}>
          <div className={styles.left}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{description}</p>
            <div className={styles.actions}>
                {buttons?.map((btnProps, i) => (
                  <Button
                    key={i}
                    href={btnProps.href}
                    type={btnProps.type}
                  >
                    {btnProps.label}
                  </Button>
                ))}
              </div>
          </div>

          {image?.url && (
              <div
                className={styles.right}
                style={{
                  backgroundImage: `url('${image.url}')`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: 356,
                  marginLeft: "auto",
                  width: "100%",
                }}
              />
            )}
        </div>
      </Section>
    )
  }
})

export default {
  Name,
}
