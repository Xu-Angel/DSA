/* 
1. 双循环加中间数组
思路：
分开横、竖以及1、2... 等九个格子进行判断
循环这几种类型，定义一个中间数组，每次循环一横、一竖或者一个格子时，都进行判断
如果当前项是 .，或者不是且在中间数组中不存在，则添加进中间数组
否则，就是出现了重复，那么直接返回 false
每次循环完一横、一竖或者一个格子时，就把中间数组清空，来进行重复利用
最后，循环结束都没有返回，那么说明数独有效，返回 true
 */

/**
 * @param
 *   board [object] Sudoku Array
 * @return
 *   [boolean]
 */
var isValidSudoku = function(board) {
  let n = board.length,
    ary = [];
  //=> 横
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let item = board[i][j];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
    ary = [];
  }
  
  //=> 竖
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let item = board[j][i];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
    ary = [];
  }
  
  //=> 1
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let item = board[i][j];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
  }
  ary = [];
  //=> 2
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      let item = board[i][j];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
  }
  ary = [];
  //=> 3
  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      let item = board[i][j];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
  }
  ary = [];
  //=> 4
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      let item = board[i][j];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
  }
  ary = [];
  //=> 5
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      let item = board[i][j];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
  }
  ary = [];
  //=> 6
  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      let item = board[i][j];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
  }
  ary = [];
  //=> 7
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      let item = board[i][j];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
  }
  ary = [];
  //=> 8
  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      let item = board[i][j];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
  }
  ary = [];
  //=> 9
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      let item = board[i][j];
      if (item === '.' || (item !== '.' && ary.indexOf(item) === -1)) {
        ary.push(item);
      } else {
        return false;
      }
    }
  }
  return true;
};