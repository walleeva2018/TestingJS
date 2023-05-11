function arrayToList(arr) {
  let obj=[];
  for (let i = 0; i < arr.length; i++) {
    obj.push({ value: arr[i], ref: i + 1 });
  }
  return obj;
}

function ListToArray(obj){
    let arr=[]
    for(let i=0;i<obj.length;i++)
    {
          arr.push(obj[i].value);
    }
    return arr;

}

console.log(arrayToList([10, 20]));
console.log(ListToArray(arrayToList([10, 20])));
