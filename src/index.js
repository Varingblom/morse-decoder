const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
  let result = []
  let arr = []
  let arrMorse = [] 
  for (let i = 0; i < expr.length; i += 10) {
    arr.push(expr.slice(i, i + 10))
    }
    arr.map(num => {
      sign = ('')
      for (let i = 9; i > 0; i -= 2) {
        if (num[i-1] + num[i] == '11' ) {sign = '-' + sign}
        if (num[i-1] + num[i] == '10' ) {sign = '.' + sign}
        if (num[i-1] + num[i] == '00' ) {sign = '' + sign}
      }
      arrMorse.push(sign)
    })
    arrMorse.map(sign => {
      if (!MORSE_TABLE[sign]) {result += ' '}
      else 
      result += MORSE_TABLE[sign]
    })
    return result
}

module.exports = {
    decode
}
