// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".


/* slower */ const numJewelsInStones = function(jewels, stones) {
  let count = 0;
  const stoneObj = {};
  for (let i in stones) {
    const stone = stones[i];
    stoneObj[stone] ? stoneObj[stone]++ : stoneObj[stone] = 1;
  }
  for (let i in jewels) {
    const jewel = jewels[i];
    stoneObj[jewel] ? count += stoneObj[jewel] : null;
  }
  return count;
};

const testJewels = "aA";
const testStones = "aAAbbbb";

console.log(numJewelsInStones(testJewels, testStones))

/* faster */ const numJewelsInStones2 = function(jewels, stones) {
  let count = 0;
  const stoneObj = {};
  for (let i = 0; i < stones.length; i++) {
    const stone = stones[i];
    stoneObj[stone] ? stoneObj[stone]++ : stoneObj[stone] = 1;
  }
  for (let i = 0; i < jewels.length; i++) {
    const jewel = jewels[i];
    stoneObj[jewel] ? count += stoneObj[jewel] : null;
  }
  return count;
};

console.log(numJewelsInStones2(testJewels, testStones))