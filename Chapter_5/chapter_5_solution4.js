// taken help from the solutiion part 
obj = [
    {
      name: "Bangla",
      direction: "ltr",
      ranges: [
        [994, 1008],
        [11392, 11508],
        [11513, 11520],
      ],
      year: -200,
      living: false,
    },
    {
      name: "Arabic",
      direction: "rtl",
      ranges: [
        [9924, 10118],
        [192, 1111],
        [11, 115],
      ],
      year: -2,
      living: true,
    },
    {
      name: "Monholian",
      direction: "rlt",
      ranges: [
        [99422, 1222008],
        [112392, 1122508],
        [112513, 1221520],
      ],
      year: -111,
      living: false,
    },
    {
      name: "English",
      direction: "ltr",
      ranges: [
        [994222, 12222008],
        [113222292, 1122222508],
        [11522213, 115222220],
      ],
      year: -2000,
      living: true,
    },
    {
      name: "Indian",
      direction: "ltr",
      ranges: [
        [992224, 10222208],
        [11222392, 115022228],
        [11522213, 1152222220],
      ],
      direction: "ltr",
      year: -20,
      living: true,
    },
  ];


  function countBy(items, groupName) {
    console.log(items,groupName);
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

  function characterScript(code) {
    for (let script of obj) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  

function dominantDirection(text) {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));

      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
     
    console.log(counted);

    if (counted.length == 0) return "ltr";
  
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }
  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl