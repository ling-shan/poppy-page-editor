import React, { useCallback } from 'react'
import { Button } from 'antd';
import { PanelLeft, PanelRight, } from 'lucide-react';
import { usePuck } from '@measured/puck';

import { registerPlugin } from "../../core/registerPlugin";
import { useEditorContext } from "../../core/PageEditor";

import styles from './HeaderPlugin.module.css'


// https://lucide.dev/icons/stretch-vertical

function Header() {
  const editorContext = useEditorContext();
  const puck = usePuck();
  const { appState, dispatch } = puck;
  const { data } = appState;

  const onPanelLeftIconClick = useCallback(() => {
    dispatch({
      type: "setUi",
      ui: {
        leftSideBarVisible: !appState.ui.leftSideBarVisible,
      },
    });
  }, [appState.ui.leftSideBarVisible, dispatch])

  const onPanelRightIconClick = useCallback(() => {
    dispatch({
      type: "setUi",
      ui: {
        rightSideBarVisible: !appState.ui.rightSideBarVisible,
      },
    });
  }, [appState.ui.rightSideBarVisible, dispatch])

  const onSaveClick = useCallback(() => {
    editorContext.onPublish(data);
  }, [data, editorContext])

  return (
    <header className={styles.main}>
      <div className={styles.content}>
        <div className={styles.layout}>
          <Button style={{opacity: appState.ui.leftSideBarVisible ? 1 : 0.4}} type="text" icon={<PanelLeft />} onClick={onPanelLeftIconClick} />
          <Button style={{opacity: appState.ui.rightSideBarVisible ? 1 : 0.4}} type="text" icon={<PanelRight />} onClick={onPanelRightIconClick} />
        </div>
        <div className={styles.title}>
          {data.root.title}
        </div>
        <div className={styles.actions}>
          <Button type="primary" onClick={onSaveClick}>Save</Button>
        </div>
      </div>
    </header>
  )
}

registerPlugin({
  overrides: {
    header() {
      return <Header />
    }
  }
})

