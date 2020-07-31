const caesarShift = (str, amount) => {
    // Wrap the amount, deals with negatives
    if (amount < 0) {
      return caesarShift(str, amount + 26)
    }
    // go over each character
    let output = str.split('').map(c => {
      // check if it is a letter
      if (c.match(/[a-z]/i)) {
        // convert to number code
        let code = c.charCodeAt(0)
        // shift by number code uppercase
        if ((code >= 65) && (code <= 90)) {
          return String.fromCharCode(((code - 65 + amount) % 26) + 65)
        // shift by number lowercase
        // could just be else, but more readable to write another if statement
        } else if ((code >= 97) && (code <= 122)) {
          return String.fromCharCode(((code - 97 + amount) % 26) + 97)
        }
      // other character? Don't shift it
      } else {
        return c
      }
    })
    return output.join('')
  }

  export default caesarShift;