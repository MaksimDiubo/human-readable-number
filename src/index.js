module.exports = function toReadable (number) {
  const numbers = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
      30: "thirty",
      40: "forty",
      50: "fifty",
      60: "sixty",
      70: "seventy",
      80: "eighty",
      90: "ninety",
  }
  if (numbers[number]) {
      return numbers[number]
  } else {
    
    let str = String(number);
    if (str.length == 3 && str[1] != 1 && str[2] != 0 && str[1] != 0) {
      return `${numbers[str[0]]} hundred ${numbers[str[1] * 10]} ${numbers[str[2]]}`
    } else if (str.length == 3 && str[1] == 1) {
      return `${numbers[str[0]]} hundred ${numbers[str[1] + str[2]]}`
    } else if (str.length == 3 && str[1] == 0 && str[2] != 0) {
      return `${numbers[str[0]]} hundred ${numbers[str[2]]}`
    } else if (str.length == 3 && str[2] == 0 && str[1] != 0) {
      return `${numbers[str[0]]} hundred ${numbers[str[1] + str[2]]}`
    } else if (str.length == 3 && str[1] == 0 && str[2] == 0) {
      return `${numbers[str[0]]} hundred`
    } else {
      return `${numbers[str[0] * 10]} ${numbers[str[1]]}`
    }  
  }
}
