// todo
//  find the factor by which the string has to be multiplies
//  multiply the string to get a final string
//  now find the number of occurances of a

function repeatedString(s: string, n: number): number {
  let alphabet: string = "a";
  if (s.length === 1 && s[0] === alphabet) return n;
  // a can also be made a dynamic variable
  if (s.length == 0 || n === 0) return 0;

  let count: number = 0;

  const getRepeatRatio = (str: string): number => {
    console.log(str.length);
    let repeatCount: number = 0;
    for (let i: number = 0; i <= str.length - 1; i++) {
      if (s[i] === alphabet) {
        repeatCount = repeatCount + 1;
      }
    }

    return repeatCount/str.length;
  };

  // const getRepeatFactor = (str: string, n: number): number => {
  //   let totalRepeatCount: number = n / str.length;
  //   return totalRepeatCount;
  // };
  // console.log(getRepeatFactor(s, n), "repeat factor");
  return Math.ceil(n * getRepeatRatio(s));
  // s = s.repeat(Math.ceil(n / s.length));
  // for (let i = 0; i < n; i++) {
  //   if (s[i] === alphabet) {
  //     count++;
  //   }
  // }

  // Write your code here
}
// let repeatCount = repeatedString(
//   "bcbccacaacbbacabcabccacbccbababbbbabcccbbcbcaccababccbcbcaabbbaabbcaabbbbbbabcbcbbcaccbccaabacbbacbc",
//   649606239668
// );
let repeatCount = repeatedString(
  "aadcdaccacabdaabadadaabacdcbcacabbbadbdadacbdadaccbbadbdcadbdcacacbcacddbcbbbaaccbaddcabaacbcaabbaaa",
  942885108885
);

