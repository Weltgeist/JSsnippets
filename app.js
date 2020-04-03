const kelvin = 293;//const 293 value
let celcius = kelvin-273;//subsctract 273
let fahrenheit = Math.floor(celcius*(9/5) + 32);//converted, multipled by fract.//used math library for conversion.
console.log(`The temperature is ${fahrenheit}`);
let newton = Math.floor(celcius*(33/100));
console.log(`The temperature is ${newton}`);