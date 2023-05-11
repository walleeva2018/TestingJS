function countChar(s, ch = "B") {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) if (s[i] == ch) cnt++;
  return cnt;
}

console.log(countChar("kakkerlak", "k"));