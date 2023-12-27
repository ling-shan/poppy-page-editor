import React, { useCallback } from 'react'
import { Avatar, Button, Card, Typography } from 'antd';

import { registerComponent } from '../../core/registerComponent';

import styles from './Card.module.css'
import Meta from 'antd/es/card/Meta';

const Name = 'Card'

interface CardProps {
  title?: string
  description?: string
  href?: string
  coverImg?: string
}

registerComponent<CardProps>({
  name: Name,

  fields: {
    title: {
      type: 'text',
    },
    description: {
      type: 'text'
    },
    href: {
      type: 'text'
    },
    coverImg: {
      type: 'text'
    }
  },
  defaultProps: {
    title: 'Kurt Vonnegut',
    description: 'True terror is to wake up one morning and discover that your high school class is running the country.',
    coverImg: 'https://images.unsplash.com/photo-1687204209659-3bded6aecd79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
  },

  render(props) {
    const {
      href,
      coverImg,
      title,
      description,
    } = props;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const onCardClick = useCallback(() => {
      if (!props.href) {
        return;
      }
      location.href = props.href as string;
    }, [props.href])

    return (
      <Card
        bordered
        className={styles.main}
        hoverable
        type="inner"
        data-href-url={href}
        onClick={onCardClick}
        cover={coverImg && <img className={styles.coverImage} alt={title} src={coverImg} />}
      >
        <Meta
          title={title}
          description={description} />
      </Card>
    )
  }
})

export default {
  Name
}
