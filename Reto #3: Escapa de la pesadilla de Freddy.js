function findSafestPath(dream) 
{
  const height = dream.length;
  const length = dream[0].length;

  for (let row = 0; row < height; row++) 
  {
    for (let col = 0; col < length; col++) 
    {
      if (row === 0 && col === 0) continue ;

      let minDanger =
        Math.min
        (
          row > 0 ? dream[row - 1][col] : dream[row][col - 1],
          col > 0 ? dream[row][col - 1] : dream[row - 1][col]
        );
      
      dream[row][col] += minDanger;
    }
  }

  return dream[height - 1][length - 1];
}
