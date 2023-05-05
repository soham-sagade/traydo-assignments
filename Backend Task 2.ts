function intToRoman(num: number): string {
  const numerals: { [key: number]: string } = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let result = "";

  for (let value of Object.keys(numerals).map(Number).sort((a, b) => b - a)) {
    while (num >= value) {
      result += numerals[value];
      num -= value;
    }
  }

  return result;
}

console.log(intToRoman(27)); // output: XXVII
console.log(intToRoman(3999)); // output: MMMCMXCIX
console.log(intToRoman(62)); // output: MMMCMXCIX
