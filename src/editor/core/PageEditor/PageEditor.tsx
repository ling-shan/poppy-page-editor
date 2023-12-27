import React from 'react';
import { Data, Puck } from "@measured/puck";

import { getConfig } from '../../core/config';
import { getAllRegisteredPlugins } from '../registerPlugin';
import { EditorContextProvider } from './EditorContext';

export interface PageEditorProps {
  data?: Data
  onCancel?: () => void
  onSave?: (data: Data) => void;
}

const defaultData: Data = {
  root: {},
  content: [],
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const defaultOnPublish = () => {};

export function PageEditor(props: PageEditorProps) {
  return (
    <EditorContextProvider onSave={props.onSave} onCancel={props.onCancel}>
      <Puck
        config={getConfig()}
        data={props.data ?? defaultData}
        plugins={getAllRegisteredPlugins()}
        onPublish={props.onSave ?? defaultOnPublish} />
    </EditorContextProvider>
  )
}



export default PageEditor;
