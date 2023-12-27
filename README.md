# Poppy Page Editor

## Usage

```sh
npm install @x-poppy/page-editor
```

## Editor

```jsx
// EditPage

import { PageEditor } from '@x-poppy/page-editor/editor';

function EditPage() {
  const onSaveCallback = useCallback((data) => {
    console.log('Saved Data', data);
  }, [])

  return (
    <PageEditor data={initData as any} onPublish={onSaveCallback}/>
  )
}
```

## Render

```jsx
// PreviewPage

import { PageRender } from '@x-poppy/page-editor/render';

function PreviewPage() {
  return (
    <PageRender data={initData as any} />
  )
}
```
