const crypto = require('crypto');

const tokenMap = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
];

function createSentence(...tokens) {
  return `The SHA256 for this sentence begins with: ${tokenMap[tokens[0]]}, ${
    tokenMap[tokens[1]]
  }, ${tokenMap[tokens[2]]}, ${tokenMap[tokens[3]]}, ${tokenMap[tokens[4]]}, ${
    tokenMap[tokens[5]]
  } and ${tokenMap[tokens[6]]}.`;
}

function check(...tokens) {
  const sentence = createSentence(...tokens);
  const hashed = crypto.createHash('sha256').update(sentence).digest('hex');
  const head = hashed.slice(0, 7);
  const headTokens = head.split('').map((x) => parseInt(x, 16));
  for (let i = 0; i < 8; i++) {
    if (tokens[i] !== headTokens[i]) return;
  }
  console.log(sentence);
  process.exit();
}

function loop(checkFn) {
  for (let first = 0; first < 16; first++) {
    for (let second = 0; second < 16; second++) {
      console.log({ first, second });
      for (let third = 0; third < 16; third++) {
        for (let fourth = 0; fourth < 16; fourth++) {
          for (let fifth = 0; fifth < 16; fifth++) {
            for (let sixth = 0; sixth < 16; sixth++) {
              for (let seventh = 0; seventh < 16; seventh++) {
                checkFn(first, second, third, fourth, fifth, sixth, seventh);
              }
            }
          }
        }
      }
    }
  }
}

console.log('searching...');
loop(check);
