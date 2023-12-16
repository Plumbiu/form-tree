import { buildTree } from 'src'
import { expect, test } from 'vitest'

test('build tree', () => {
  const {
    data: tree,
    addNode,
    getNode,
  } = buildTree([
    { id: 'root' },
    { id: 'foo', parentId: 'baz' },
    { id: 'baz', parentId: 'root' },
    { id: 'item1', parentId: 'item2' },
    { id: 'item2', parentId: 'baz' },
    { id: 'item3', parentId: 'item4' },
    { id: 'item4', parentId: 'item5' },
    { id: 'item5', parentId: 'item6' },
    { id: 'item6', parentId: 'foo' },
  ])!
  expect(tree).toEqual([
    {
      id: 'root',
      children: [
        {
          id: 'baz',
          children: [
            {
              id: 'foo',
              children: [
                {
                  id: 'item6',
                  children: [
                    {
                      id: 'item5',
                      children: [
                        {
                          id: 'item4',
                          children: [
                            {
                              id: 'item3',
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 'item2',
              children: [
                {
                  id: 'item1',
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ])
  addNode({ id: 'item7', parentId: 'item2' })
  expect(tree).toEqual([
    {
      id: 'root',
      children: [
        {
          id: 'baz',
          children: [
            {
              id: 'foo',
              children: [
                {
                  id: 'item6',
                  children: [
                    {
                      id: 'item5',
                      children: [
                        {
                          id: 'item4',
                          children: [
                            {
                              id: 'item3',
                              children: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 'item2',
              children: [
                {
                  id: 'item1',
                  children: [],
                },
                {
                  id: 'item7',
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ])

  expect(getNode('item2')).toEqual({
    id: 'item2',
    children: [
      {
        id: 'item1',
        children: [],
      },
      {
        id: 'item7',
        children: [],
      },
    ],
  })
})
