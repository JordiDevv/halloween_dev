function escapePyramidHead(room)
{
  let pCoor = { y: 0, x: 0 }
  let tCoor = { y: 0, x: 0 }
  const height = room.length
  const width = room[0].length

  const visited = Array.from({ length: height }, () => Array(width).fill(false))
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

  pFor: for (let y = 0; y < room.length; y++)
  {
    pCoor.y = y
    let row = room[y]
    for (let x = 0; x < row.length; x++)
    {
      if (room[y][x] == '▲')
      {
        pCoor.x = x
        break pFor
      }
    }
  }

  tFor: for (let y = 0; y < room.length; y++)
  {
    tCoor.y = y
    let row = room[y]
    for (let x = 0; x < row.length; x++)
    {
      if (room[y][x] == 'T')
      {
        tCoor.x = x
        break tFor
      }
    }
  }

  const queue = [{ y: pCoor.y, x: pCoor.x, path: [] }];
  while (queue.length > 0)
  {
    const current = queue.shift();

    if (current.x === tCoor.x && current.y === tCoor.y)
      return current.path.length

    for (const [dy, dx] of dirs)
    {
      const ny = current.y + dy;
      const nx = current.x + dx;

      if
      (
        ny >= 0 && ny < height &&
        nx >= 0 && nx < width &&
        !visited[ny][nx] &&
        room[ny][nx] !== '#'
      )
      {
        visited[ny][nx] = true;
        queue.push
        ({
          y: ny,
          x: nx,
          path: [...current.path, { y: ny, x: nx }]
        });
      }
    }
  }

  return -1
}
