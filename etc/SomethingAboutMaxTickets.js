function maxTickets(tickets) {
  const sortedArr = tickets.sort((a,b)=>a-b);
  let start = 1;
  let max = 0;
  for (let i = 1; i < sortedArr.length; i++) {
      if (sortedArr[i] - sortedArr[i - 1] >= 2 || i === sortedArr.length - 1) {
          let diff = i - start;
          if (diff > max) {
              max = diff;
          }
          start = i;
      }
  }
  return max;
}

console.log(maxTickets([3,2,14,4]))