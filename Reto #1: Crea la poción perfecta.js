function createMagicPotion(potions, target) {
  let i = 0;
  let j = 1;
  let INT_MIN = -2147483648;
  let INT_MAX = 2147483647;
  let combo = [INT_MIN, INT_MAX];
  while(potions[i])
  {
    j = i + 1;
    while(potions[j])
    {
      if (potions[i] + potions[j] == target && j < combo[1])
      {
        combo[0] = i;
        combo[1] = j;
        break ;
      }
      j++
    }
    i++;
  }

  if (combo[0] > INT_MIN)
    return (combo);
  return undefined
}
