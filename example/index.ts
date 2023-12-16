import { buildTree } from 'src'

const {
  data: tree,
  addNode,
  getNode,
} = buildTree([
  { id: 'root' },
  { id: 'foo', parentId: 'baz', data: 'any type' },
  { id: 'baz', parentId: 'root', data: 'any type' },
  { id: 'item1', parentId: 'item2', data: 'any type' },
  { id: 'item2', parentId: 'baz', data: 'any type' },
  { id: 'item3', parentId: 'item4', data: 'any type' },
  { id: 'item4', parentId: 'item5', data: 'any type' },
  { id: 'item5', parentId: 'item6', data: 'any type' },
  { id: 'item6', parentId: 'foo', data: 'any type' },
])!

console.log(tree)
addNode({ id: 'item7', parentId: 'item6' })
console.log(getNode('item2'))
