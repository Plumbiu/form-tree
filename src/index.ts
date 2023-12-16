interface TreeBase {
  id: string
  [key: string]: any
}

interface TreeItem extends TreeBase {
  parentId: string
}

interface Tree extends TreeBase {
  children: Tree[]
}



export const buildTree = (
  props: Array<{
    id: string
    parentId?: string
    [key: string]: any
  }>,
) => {
  const { id: rootId, parentId, ...rest } = props[0]
  if (parentId) {
    return
  }
  const rootItem = {
    id: rootId,
    children: [],
    ...rest,
  }
  const map = new Map<string, Tree>([[rootId, rootItem]])
  for (const { id, ...rest } of props.slice(1)) {
    delete rest.parentId
    const item: Tree = {
      id,
      children: [],
      ...rest,
    }
    map.set(id, item)
  }
  for (const prop of props.slice(1)) {
    const parent = map.get(prop.parentId!)
    parent?.children.push(map.get(prop.id)!)
  }
  const data = map.get(rootId)
  return {
    data: data ? [data] : [],
    addNode: (param: TreeItem) => {
      const { id, parentId, ...rest } = param
      const parent = map.get(parentId)
      parent?.children.push({
        id,
        children: [],
        ...rest,
      })
    },
    getNode: (id: string) => {
      return map.get(id)
    },
  }
}
