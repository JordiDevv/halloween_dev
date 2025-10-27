function battleHorde(zombies, humans) 
{
  let i = 0;
  let z_power = 0;
  let h_power = 0;

  while (zombies[i] && humans[i])
  {
    z_power += parseInt(zombies[i]);
    h_power += parseInt(humans[i]);
    i++;
  }

  if (z_power > h_power)
  {
    let r = z_power - h_power;
    return (r + 'z');
  }
  if (h_power > z_power)
  {
    let r = h_power - z_power;
    return (r + 'h');
  }
  return 'x'
}
