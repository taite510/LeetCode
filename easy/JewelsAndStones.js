// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".


/* slower */ var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  let stoneObj = {};
  for (let i in stones) {
    let stone = stones[i];
    stoneObj[stone] ? stoneObj[stone]++ : stoneObj[stone] = 1;
  }
  for (let i in jewels) {
    let jewel = jewels[i];
    stoneObj[jewel] ? count += stoneObj[jewel] : null;
  }
  return count;
};

let testJewels = "aA";
let testStones = "aAAbbbb";

console.log(numJewelsInStones(testJewels, testStones))

/* faster */ var numJewelsInStones2 = function(jewels, stones) {
  let count = 0;
  let stoneObj = {};
  for (let i = 0; i < stones.length; i++) {
    let stone = stones[i];
    stoneObj[stone] ? stoneObj[stone]++ : stoneObj[stone] = 1;
  }
  for (let i = 0; i < jewels.length; i++) {
    let jewel = jewels[i];
    stoneObj[jewel] ? count += stoneObj[jewel] : null;
  }
  return count;
};

console.log(numJewelsInStones2(testJewels, testStones))