function findTheKiller(whisper, suspects) 
{
  let posibilities = [];
  let push_suspect = [];

  let i = k = 0;

  while (suspects[i])
  {
    let j = 0;
    push_suspect = posibilities.slice();

    if (posibilities.length > 0)
        push_suspect[k++] = ',';
    if (whisper[0] === whisper[0].toLowerCase())
    {
      whisper = whisper.split("");
      whisper[0] = whisper[0].toUpperCase();
      whisper = whisper.join("");
    }

    while (whisper[j] == suspects[i][j] || whisper[j] == '~')
    {
      push_suspect[k++] = suspects[i][j++];
      if ((whisper[j] == '$' && !suspects[i][j]) || !whisper[j])
      {
        while (suspects[i][j])
          push_suspect[k++] = suspects[i][j++];
        posibilities = push_suspect;
        break ;
      }
      else if (whisper[j] && !suspects[i][j])
        break ;
    }

    i++;
  }
  
  posibilities = posibilities.join("");
  return posibilities;
}
