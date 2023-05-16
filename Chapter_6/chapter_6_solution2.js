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