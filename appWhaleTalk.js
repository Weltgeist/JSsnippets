let input = "I'm a whale in the water";
let vowels = ['a','e','i','o','u'] ;
let resultArray = [];

for ( let i = 0; i < input.length; i++){
  //console.log(i+' '+input[i]);
  for ( let j = 0; j < vowels.length; j++){
    if (input[i] === vowels[j]){
      console.log(vowels[j]);
      resultArray.push(input[i]);
    }
  };
  //Whales doubles e and u
  if (input[i] === 'e'){
    resultArray.push('e')
  }
  if (input[i] === 'u'){
    resultArray.push('u')
  }
};


console.log(resultArray.join('').toUpperCase());
