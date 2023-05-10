for (let i = 1; i <= 8; i++) {
  let res="";
  for (let j = 1; j <= 8; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 1) res += "#";
      else res += " ";
    } else {
      if (j % 2 == 0) res += "#";
      else res += " ";
    }
  }
  console.log(res);
}
