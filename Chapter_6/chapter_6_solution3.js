class Group {

    constructor(){
          this.data=[];
    }

    add(a)
    {
        this.data.push(a);
    }
    delete(a)
    {
        this.data.filter(s=> s!==a);
    }
    has(a)
    {
        return this.data.includes(a);
    }

    static from(arr)
    {
        let grp=new Group;
        for(let i=0;i<arr.length;i++)
        {
            grp.add(arr[i])
        }
        return grp
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
      }
    
  }

  class GroupIterator{
    constructor(group)
    {
        this.group=group;
        this.position=0;
    }

    next(){
        if(this.position>= this.group.data.length){
            return {done:true}
        }
        else{
            let result={value: this.group.data[this.position], done: false};
            this.position++
            return result;
        }
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }


