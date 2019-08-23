var list = [{
  id: '1',
  children: [{
    id: '11',
    children: [{
      id: '111'
    }, {
      id: '112'
    }]
  }, {
    id: '12',
    children: [{
      id: '121'
    }, {
      id: '122'
    }]
  }]
}]

const value = '122';

function fn(id, list) {
  const match = list.find(item => item.id === id);
  if (match) return [id];
  const sub = list.find(item => id.startsWith(item.id));
  return [sub.id].concat(fn(id, sub.children));
}

// bfs利用队列实现，循环中做的是push => shift => push => shift
// dfs利用栈实现，循环中做的是push => pop => push => pop
// 刚刚好，中间仅仅差了一个数组方法：

function bfs(target, id) {
  const quene = [...target]
  do {
    const current = quene.shift()
    if (current.children) {
      quene.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
    }
    if (current.id === id) {
      return current
    }
  } while(quene.length)
  return undefined
}

function dfs(target, id) {
  const stask = [...target]
  do {
    const current = stask.pop()
    if (current.children) {
      stask.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
    }
    if (current.id === id) {
      return current
    }
  } while(stask.length)
  return undefined
}

// 公共的搜索方法，默认bfs
function commonSearch(target, id, mode) {
  const staskOrQuene = [...target]
  do {
    const current = staskOrQuene[mode === 'dfs' ? 'pop' : 'shift']()
    if (current.children) {
      staskOrQuene.push(...current.children.map(x => ({ ...x, path: (current.path || current.id) + '-' + x.id })))
    }
    if (current.id === id) {
      return current
    }
  } while(staskOrQuene.length)
  return undefined
}