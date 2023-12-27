import React from 'react';
import { registerComponent } from '../../core/registerComponent';

import classNames from 'classnames';
import Button from '../../components/Button';
import { ButtonFileds, ButtonProps } from '../Button';
import Section from '../../components/Section';

import styles from './Hero.module.css'

const Name = 'Hero';

export interface HeroProps {
  title?: string;
  description?: string;
  align?: string;
  padding?: string;
  image?: {
    mode?: "inline" | "background";
    url?: string;
  };
  buttons?: ButtonProps[]
}

registerComponent<HeroProps>({
  name: Name,
  fields: {
    title: { type: "text" },
    description: { type: "textarea" },
    align: {
      type: "radio",
      options: [
        { label: "left", value: "left" },
        { label: "center", value: "center" },
      ],
    },
    image: {
      type: "object",
      objectFields: {
        url: { type: "text" },
        mode: {
          type: "radio",
          options: [
            { label: "inline", value: "inline" },
            { label: "background", value: "background" },
          ],
        },
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
    align: "left",
    title: "Samuel Ullman",
    description: "Nobody grows old merely by living a number of years. We grow old by deserting our ideals. Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul.",
    padding: "64px",
    buttons: [{ label: "Learn more" }],
    image: {
      mode: 'inline',
      url: 'https://images.unsplash.com/photo-1687204209659-3bded6aecd79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    }
  },

  render(props) {
    const { padding, align, title, description, buttons, image } = props;
    return (
      <Section
        padding={padding}
        className={classNames(styles.main,
          align === "left" && styles.alignLeft,
          align === "center" && styles.alignCenter,
          image?.mode === "background" && styles.hasImageBackground,
          )}
      >
        {image?.mode === "background" && (
          <>
            <div className={styles.image} style={{backgroundImage: `url("${image?.url}")`,}}></div>
            <div className={styles.imageOverlay}></div>
          </>
        )}

        <div className={styles.inner}>
          <div className={styles.content}>
            <h1>{title}</h1>
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

          {align !== "center" && image?.mode !== "background" && image?.url && (
            <div
              style={{
                backgroundImage: `url('${image.url}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: 24,
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

