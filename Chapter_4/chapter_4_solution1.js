function range(start, end, step = 1) {
  let arr = [];
  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }
  return arr;
}
function sum(arr)
{
    let ans=0;
   for(let i=0;i<arr.length;i+=1)
   {
      ans=ans+arr[i];
   }
   return ans;
}
console.log(sum(range(1,10)));
