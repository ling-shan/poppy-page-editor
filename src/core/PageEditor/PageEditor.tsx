import React, { useMemo } from 'react';
import { Data, Puck } from "@measured/puck";
import { getEditorConfig } from '../../core/config';

export interface PageEditorProps {
  data?: Data
  onPublish?: (data: Data) => void;
}

const defaultData: Data = {
  root: {},
  content: [],
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultOnPublish = () => {};

export function PageEditor(props: PageEditorProps) {
  const config = useMemo(() => {
    return getEditorConfig();
  }, []);

  return (
    <Puck config={config} data={props.data ?? defaultData} onPublish={props.onPublish ?? defaultOnPublish} />
  )
}

export default PageEditor;
