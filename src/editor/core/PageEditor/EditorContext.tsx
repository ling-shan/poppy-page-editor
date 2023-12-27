import React, { ReactNode, useContext, useMemo } from 'react'
import { Data } from "@measured/puck";

interface EditorContextAPI {
  onCancel: () => void
  onSave: (data: Data) => void
}

const EditorContext = React.createContext<EditorContextAPI>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCancel: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSave: () => {}
});

interface EditorContextProviderProps {
  onCancel?: () => void
  onSave?: (data: Data) => void
  children?: ReactNode
}

export function EditorContextProvider(props: EditorContextProviderProps) {
  const pageEditorContext = useMemo<EditorContextAPI>(() => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onCancel: props.onCancel ?? (() => {}),
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onSave: props.onSave ?? (() => {})
    }
  }, [props.onSave])

  return (
    <EditorContext.Provider value={pageEditorContext}>
      {props.children}
    </EditorContext.Provider>
  )
}

export function useEditorContext() {
  return useContext(EditorContext);
}
