import React, { useMemo } from 'react';
import { Data, Render } from "@measured/puck";

import "@measured/puck/puck.css";
import { getRenderConfig } from '../../core/config';

export interface PageRenderProps {
  data?: Data
}

const defaultData: Data = {
  root: {},
  content: [],
};

export function PageRender(props: PageRenderProps) {
  const config = useMemo(() => {
    return getRenderConfig();
  }, []);

  return (
    <Render config={config} data={props.data ?? defaultData} />
  )
}

export default PageRender;
