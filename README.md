# Tree-Util

> Build tree with simple API.

# Install

```bash
npm install form-tree
```

# Usage

```js
import { buildTree } from 'form-tree'

// This first element should not have parentId as it is the root of tree
const { addNode, tree, getNode } = buildTree([
  { id: 'root', someData: 'root node' },
  { id: 'foo', parentId: 'root' },
])
console.log(tree)
/*
  {
    id: 'root',
    someData: 'root node',
    children: [
      {
        id: 'foo',
        children: []
      }
    ]
  }
*/
console.log(getNode('foo'))
/*
  {
    id: 'foo',
    children: []
  }
*/

addNode({ id: 'baz', parentId: 'foo', data: 'new node' })
console.log(getNode('foo'))
/*
  {
    id: 'foo',
    children: [
      {
        id: 'baz',
        data: 'new node',
        children: []
      }
    ]
  }
*/
```
