function solution(A, B) {
  let bigger, smaller
  if (B > A) {
      [bigger, smaller] = [B, A];
  } else {
      [bigger, smaller] = [A, B];
  }
  if (smaller * 4 < bigger) {
      return Math.floor(bigger / 4)
  } else if(smaller * 3 < bigger) {
      return smaller
  } else if (smaller * 2 < bigger) {
      return Math.floor(bigger / 3)
  } else {
      return Math.floor(smaller / 2)
  }
}

console.log(solution(1,21))