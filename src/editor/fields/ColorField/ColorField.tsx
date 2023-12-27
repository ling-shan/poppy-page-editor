/* eslint-disable react/prop-types */
import React, { useCallback } from 'react'
import { CustomField, FieldLabel } from '@measured/puck';
import { ColorPicker } from 'antd';

export const ColorField: CustomField["render"] = (props) => {
  const {
    name,
    readOnly,
    onChange,
    value = '#0000',
  } = props;

  return (
    <FieldLabel label={name} readOnly={readOnly}>
      <ColorPicker showText disabled={readOnly} value={value} onChangeComplete={(color) => {onChange(color.toHexString() as any)}}/>
    </FieldLabel>
  )
}

export default ColorField;
