let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to','Program');
let pos = secretMessage.indexOf('easily');
secretMessage[pos] = 'right';
console.log(secretMessage.join(' '));
secretMessage.shift();
secretMessage.unshift('Programming');
pos = secretMessage.indexOf('get');
secretMessage.splice(pos,5,'know,');
console.log(secretMessage.join(' '));
console.log(secretMessage.join(' '));