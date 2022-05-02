// todo
//  find the factor by which the string has to be multiplies
//  multiply the string to get a final string
//  now find the number of occurances of a
function repeatedString(s, n) {
    var alphabet = "a";
    if (s.length === 1 && s[0] === alphabet)
        return n;
    // a can also be made a dynamic variable
    if (s.length == 0 || n === 0)
        return 0;
    var count = 0;
    var getRepeatRatio = function (str) {
        console.log(str.length);
        var repeatCount = 0;
        for (var i = 0; i <= str.length - 1; i++) {
            if (s[i] === alphabet) {
                repeatCount = repeatCount + 1;
            }
        }
        return repeatCount;
    };
    var getRepeatFactor = function (str, n) {
        var totalRepeatCount = n / str.length;
        return totalRepeatCount;
    };
    // console.log(getRepeatFactor(s, n), "repeat factor");
    return Math.round((getRepeatFactor(s, n) * getRepeatRatio(s)));
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
var repeatCount = repeatedString("beeaabc", 711560125001);
console.log(repeatCount);
