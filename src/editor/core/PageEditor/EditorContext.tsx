import React, { ReactNode, useContext, useMemo } from 'react'
import { Data } from "@measured/puck";

interface EditorContextAPI {
  onPublish: (data: Data) => void
}

const EditorContext = React.createContext<EditorContextAPI>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPublish: () => {}
});

interface EditorContextProviderProps {
  onPublish?: (data: Data) => void
  children?: ReactNode
}

export function EditorContextProvider(props: EditorContextProviderProps) {
  const pageEditorContext = useMemo<EditorContextAPI>(() => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onPublish: props.onPublish ?? (() => {})
    }
  }, [props.onPublish])

  return (
    <EditorContext.Provider value={pageEditorContext}>
      {props.children}
    </EditorContext.Provider>
  )
}

export function useEditorContext() {
  return useContext(EditorContext);
}
