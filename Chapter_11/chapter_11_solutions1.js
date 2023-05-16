//could not connect bigOak here so this is the solution here but it does not work
// probably "./crow-tech" is created in some previous chapter 
// Although the code here and the question is quite understandable 


async function locateScalpel(nest) {
    let current = nest.name;
    for (;;) {
      let next = await anyStorage(nest, current, "scalpel");
      if (next == current) return current;
      current = next;
    }
  }
  
  function locateScalpel2(nest) {
    function loop(current) {
      return anyStorage(nest, current, "scalpel").then(next => {
        if (next == current) return current;
        else return loop(next);
      });
    }
    return loop(nest.name);
  }
  
  locateScalpel(bigOak).then(console.log);
  // → Butcher's Shop
  locateScalpel2(bigOak).then(console.log);