// Reverses integer removing any trailing zeros

function solution(N) {
  var str = ''
  const enable_print = N % 10;
  while (N > 0) {
    if (enable_print == 0 && N % 10 != 0) {
      enable_print = 1;
    }
    if (enable_print >= 1) {
      str += (N % 10).toString();
    }
    N = Math.floor(N / 10);
  }
  return Number(str)
}

console.log(solution(23100))