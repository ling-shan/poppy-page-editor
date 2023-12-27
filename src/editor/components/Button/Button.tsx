import React, { useCallback } from 'react'
import { Button as AntDButton, ButtonProps as AntButtonProps } from 'antd';

export interface ButtonProps extends AntButtonProps {
  href?: string
}

export function Button(props: ButtonProps) {
  const { href, ...restProps } = props;
  const onClickHandler = useCallback(() => {
    if (!href) {
      return;
    }
    location.href = href;
  }, [href])
  return (
    <AntDButton {...restProps} onClick={onClickHandler}/>
  )
}

export default Button;
